#!/bin/bash

# Create logs directory if not exists
mkdir -p logs

# Get current timestamp
timestamp=$(date '+%Y-%m-%d_%H-%M-%S')

# Define log file name
log_file="logs/$timestamp.log"

echo "Starting pnpm app... Logs -> $log_file"
nohup pnpm start > "$log_file" 2>&1 &
