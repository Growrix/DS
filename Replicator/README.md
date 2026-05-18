# Replicator Export

This folder is a portable export of the agentic system from this workspace.

Included:
- .github/agents (phase 1 to phase 7 agent surface)
- .github/prompts (phase prompts)
- .github/instructions (frontend phase-2 instructions)
- Backend & Deploy (isolated foundation, template attach, continuation, and deploy lane)

Excluded from export:
- node_modules folders
- .next folders
- .git folders
- .vscode folders
- tsconfig.tsbuildinfo and machine-local logs

How to use in another project:
1. Copy the contents of this Replicator folder into the target project root.
2. Merge .github folders into target .github.
3. Keep Backend & Deploy as a root-level folder with the same name.
4. Use phase 1 to phase 3 for frontend replication/completion.
5. Use phase 4 to phase 7 only when moving into foundation attach and deploy flow.

Safety note:
This export was created as an additive package and does not modify existing frontend project code by itself.
