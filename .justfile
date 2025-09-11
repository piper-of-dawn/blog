SYNC_AND_BUILD:
    rm -rf pages/docs/*
    ./sync_and_build.sh



SERVE:
    (cd pages && mkdocs serve)

PUSH_TO_PRODUCTION:
    git add --all && git commit -m "I did not even look at it" && git push
