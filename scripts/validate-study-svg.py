#!/usr/bin/env python3
"""Dependency-free SVG integrity checks for research specimens.

Does not replace browser rendering, readability checks or expert factual review.
"""
import json
import pathlib
import sys
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parent.parent
FOLDER = ROOT / "studies" / "v0.2"
NS = "{http://www.w3.org/2000/svg}"
BLOCKED = {"script", "foreignObject", "image", "animate", "animateTransform", "set"}
manifest = json.loads((FOLDER / "manifest.json").read_text(encoding="utf-8"))
cases = manifest["studies"]
assert len(cases) == 4 and len({x["id"] for x in cases}) == 4
checked = 0
for case in cases:
    for base in (FOLDER, FOLDER / "baselines"):
        file = base / (case["id"] + ".svg")
        root = ET.parse(file).getroot()
        assert root.tag == NS + "svg", file
        assert root.get("viewBox") == "0 0 760 296", file
        assert root.get("role") == "img", file
        assert root.get("aria-labelledby") == "title description", file
        assert root.find(NS + "title") is not None, file
        assert root.find(NS + "desc") is not None, file
        assert len(root.find(NS + "desc").text or "") > 75, file
        ids = [e.get("id") for e in root.iter() if e.get("id")]
        assert ids.count("title") == 1 and ids.count("description") == 1, file
        for element in root.iter():
            name = element.tag.split("}")[-1]
            assert name not in BLOCKED, (file, name)
            for attr, value in element.attrib.items():
                local_attr = attr.split("}")[-1].lower()
                if local_attr in ("href", "src"):
                    assert not value.lstrip().lower().startswith(("http:", "https:", "data:", "javascript:")), (file, attr)
                assert not attr.lower().startswith("on"), (file, attr)
        checked += 1
print(f"Validated {checked} standalone SVG specimens and controls.")
