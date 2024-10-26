#!/usr/bin/env node

import process from "process";

import { spawnSync } from "child_process";

const argv = process.argv.slice(2);

const toRun = argv.join(" ");

if (!toRun) {
    throw new Error("No command to run");
}
try {
    spawnSync(toRun, {
        stdio: "inherit",
        shell: true
    });
    process.exit(0);
} catch {
    process.exit(0);
}
