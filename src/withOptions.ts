#!/usr/bin/env node

import { Command } from "commander";
import { spawnSync } from "child_process";

const program = new Command();

program.name("run-while-error").description("CLI to run a task and restart the process while an error occure").version("0.0.0");

program.option("-s, --silent", "fail silently").option('-c, --command <command>', "cli task to run");
program.parse(process.argv);

const options = program.opts();

if (!options.command) {
    throw new Error("No command to run");
}

try {
    spawnSync(options.command, {
        stdio: options.silent ? "ignore" : "inherit",
        shell: true
    });
    process.exit(0);
} catch {
    process.exit(0);
}

