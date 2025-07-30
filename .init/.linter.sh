#!/bin/bash
cd /home/kavia/workspace/code-generation/homepage-ui-clone-50500-50519/homepage_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

