SYNC_AND_BUILD:
    rm -rf pages/docs/*
    ./sync_and_build.sh



SERVE:
    (cd pages && mkdocs serve)