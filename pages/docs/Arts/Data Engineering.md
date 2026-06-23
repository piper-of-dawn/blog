
Anyone who has worked in quantitative finance knows that mathematical models are crucial, but they are still only a small part of the overall process. The real work is making data move cleanly and repeatably through systems that were not designed to be elegant.

It is the work before and after the model: sourcing the data, cleaning it, checking it, versioning it, moving it, rerunning it, reconciling it, and making it boring enough that the model can actually be trusted.

The model is one stop in the pipeline. Data engineering is what ensures that the train reaches that stop with the right cargo, at the right time, without failing, or worse, quietly poisoning the result. The danger is that this work often looks. So organisations underinvest in it, and this where the cost compounds.
## The Hidden Cost of Patchwork Systems

The strongest argument for good data engineering is not elegance. It is cost. This comes from my personal experience, being in this industry for years. Bad data engineering is expensive because it creates patchwork systems: one script to fix yesterday’s file, another script to patch a missing column, another manual Excel check, another person whose main job is remembering where the bodies are buried. Over time, the organisation stops paying for computation and starts paying for confusion.

There are a few ways practitioners tend to understand this works. At the shallowest level, data engineering is treated as scheduling. Then as dependency management. Then as state management. Then as observability. Eventually you realise these are not separate concerns. They are layers of the same problem: making a financial computation survive messy inputs, partial failures, reruns, late data, changing assumptions, and human impatience.

There are several ways to look at data engineering.

## Cron

The simplest view is **cron**. Something runs automatically at 2 a.m. because someone decided it should run at 2 a.m. This is simple and also fine until the upstream file arrives at 2:17, the database is locked, the market holiday calendar changes, or yesterday’s job silently failed. Cron gives you time. It does not give you understanding.

## DAG

The next view is the **DAG**, which stands for **Directed Acyclic Graph**. Example: imagine a workflow. First market data arrives, then calculations run, then reports are generated. You cannot generate the report before the calculations, and you cannot run the calculations before the data arrives.

Intuitively, a DAG is just a way of drawing those dependencies. It is called a **graph** because it represents work as a set of nodes (tasks) connected by edges (relationships). It is **directed** because those connections have a direction: one task must happen before another. And it is **acyclic** because the flow cannot loop back on itself; a task cannot depend on itself through a chain of dependencies.

This structure makes the order of execution explicit. Task A must finish before Task B. A calculation cannot run before market data lands. Reporting cannot run before reconciliation passes. A DAG turns a pile of scripts into a visible dependency graph.

If you've worked with Apache Airflow or better yet, Dagster, you've probably seen this done well: assets become the unit of truth, dependencies stay visible, and the system feels like something you can reason about instead of something you have to memorize.

## State

Then comes **state**. Imagine a script that sends an email every morning. How does it know whether it already sent today's email?How does it know which files it already processed? It has to remember something. That memory is state.

Without state, every run starts from zero and guesses. Sometimes it repeats work. Sometimes it skips work. A real example is a daily positions pipeline at a hedge fund.

Suppose the DAG is simple: ingest trades, calculate positions, generate risk reports. On Monday, a broker sends 10 million trade records. The ingestion job succeeds after processing 8 million records, then crashes because of a network failure. Without state, Tuesday's rerun has only two bad options: start from the beginning and reprocess everything, or try to guess where it left off. Both approaches are fragile.

With state, the system remembers exactly what happened. It knows which files were already consumed. The rerun continues from the last known good checkpoint instead of pretending the past never happened.

This is where modern orchestration systems become more than DAG engines. Dagster stores asset state and materialization history. Airflow persists task state in its metadata database. Streaming systems such as Apache Kafka maintain consumer offsets so applications know exactly which messages have already been processed. Workflow engines like Temporal persist workflow state so long-running processes can survive crashes and resume safely. The common idea is simple: the system remembers reality.

## Observability

Then comes **observability**. State tells you what exists. A DAG tells you what should happen. Observability tells you what actually happened.

Every run leaves evidence. Every transition becomes visible. Failures become facts. You can trace cause to effect, inspect the path, and understand the behavior of the machine without inventing stories about it.

Logs, metrics, lineage, checks, alerts, retries - they are the mechanism by which a system becomes knowable. Libraries and platforms such as OpenTelemetry, Prometheus, Grafana, Datadog, OpenLineage, Great Expectations, Sentry, and ELK can help capture, visualize, and reason about that evidence, turning operational behavior into something measurable and understandable.

That is what, A disciplined orchestration reduces that cost. Not magically. Not by throwing a fashionable platform at the problem. It reduces cost because fewer people spend their mornings firefighting, and explaining why two systems produced two different versions of the truth. Infrastructure cost falls because work is not duplicated. People cost falls because knowledge is embedded in the system instead of trapped in someone’s head.