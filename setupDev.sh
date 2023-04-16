#!/bin/bash

kill_processes() {
    pkill -f "docker-compose up mongodb"
    pkill -f "cd frontend && npm run dev"
    pkill -f "cd backend && npm start"

    pkill xterm
}

trap "kill_processes; exit" SIGINT

xterm -e "bash -c 'docker-compose up mongodb; exec bash'" &
xterm -e "bash -c 'cd frontend && npm run dev; exec bash'" &
xterm -e "bash -c 'cd backend && npm start; exec bash'" &

echo "Press Ctrl+C to kill all terminals and exit."
wait
