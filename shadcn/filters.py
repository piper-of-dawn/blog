import urllib.parse
import urllib.request
from functools import lru_cache
from typing import Any, Union


@lru_cache()
def iconify(key: str) -> str:
    base_url = "https://api.iconify.design"
    icon = key.split(':')
    if len(icon) != 2:
        raise ValueError(f"Invalid icon format: {key}. Expected format 'provider:name'.")
    provider, name = icon
    url = f'{base_url}/{provider}/{name}.svg?{urllib.parse.urlencode({"height": "20px"})}'
    with urllib.request.urlopen(url) as response:
        content = response.read().decode('utf-8')   # Convert to string if needed
    return content

def setattribute(value: Union[dict, object], k: str, v: Any):
    if hasattr(value, "__setattr__"):
        value.__setattr__(k, v)
    return value


