---
sidebar_position: 3
---

# Glossary 
List of terms that help to understand PMApp.

## Activity
An activity is the conceptual description of an event associated with a process (clinical pathway).

## Conformance

Conformance techniques are used to check if the log conforms to the model and vice versa. It is applied by comparing an existing process model with an event log of the same process.

## Corrective Filter

Filters that can correct or simplify the log according to the information that the health profesional gives us, for example algorithms that fuse sequential events that are equivalent or Group or rename specific events.

## Data rodeo 

An Interactive Process Mining Data rodeo is a highly coupled multidisciplinary interactive data analysis aimed at building process indicators that allow understanding, quantifying and qualifying processes and their changes in an objective, comprehensive and exploratory way.

## Discovery

Discovery technique takes an event log and produces a process model without using any a-priori information.

## Discretizers Filter

Using the adequate discretizers in the ingestion phase, numerical values can be converted into semantically understandable terms, for example AGE: 82,45,53,63,34 into elderly, adult, adult, mature adult, young adult.

## Enhancement

Enhancement techniques extend the existing process using information about the actual process, for example to show bottlenecks. 

## Event

An event refers to an activity in a point in time. For instance, when a patient arrives at Emergency Department (event), goes through triage (event), waits (event) and is called (event).

## Execution

An execution is considered as each of the times a trace goes through a node.

## Experiment

The result of executing a runner is an instance of the PMApp tool customized for a specific medical domain.
 
## Indicator

Information that helps to understand or measure the characteristics or intensity of one fact, and to evaluate its evolution.

## Interactive Process Indicator (IPI)

IPIs are Process Indicators produced as a result of the application of the interactive paradigm with professionals. IPIs not only provide a way to understand, measure, and optimize the process but they also allow the expert to navigate through the model discovering the features and specificities of the process. Those are provided as enhanced [Process Views](glossary#process-view).

## Interactive Process Mining (IPM)

Interactive Process Mining results from the application of Interactive Pattern Recognition methodologies to Process Mining Technologies. As a result, IPM is a paradigm that involves health professionals in the midst of the understanding of the process, until an IPI is defined. The IPI can be computed from the data available in the system and through the iterative data rodeos that curate the IPI.

## Interactive Process Mining Application (PMApp) 

It is a tool that can be customized to generate PM dashboards based on IPIs for a specific medical domain. 

## Interactive Process Mining Toolkit (IPMT)

The IPMT is a set of tools used in IPM to process models to compute common and specific metadata and associate it to models. Some of these tools, such as the experiment designer, help process miners find process indicators and configure the experiment. This is achieved by means of new or useful resources that have been successfully applied in other scenarios and that can be directly applied in similar medical domains.

## Key Performance Indicator (KPI)

A Key Performance Indicator is a measurable value that demonstrates how effectively a company is achieving its key objectives.

## Log

A log is a collection of traces.

## Node

A node is the graphical representation of one activity in the process.

## Process Indicator (PI)

A Process Indicator is a process representation that can be used as an indicator to understand or measure the behaviour of a process.

## Process Miner 

An expert in IPM that guides and interacts with health professionals during data rodeos until the definition of an IPI is reached.

## Process Mining (PM)

Process Mining is a relatively new framework that can provide useful information that is humanly understandable about the processes taking place in the reality. The Process Mining paradigm provides tools, algorithms and visualization instruments that allow human experts to obtain information about the characteristics of running processes, through analysis of event traces and activities happening in a certain procedure, from a given process-oriented perspective.

## Process View

The models are represented as Process Views and they can be visually represented as workflows with color gradients, or other representations.

## Runner

It is a setup file. The Runner has the information about the data ingestion and the customization of PMApp that are constructed during the data rodeos (Data management).

## Split Filter

Filters that split the log by dates or daily times can be useful to detect the behaviuor of the process over time.

## Stratification Filter

These are filters that extract sub-logs from the main log, representing a subpopulation depending on a specific characteristic, for example filters to select patients based on their age, gender, or specific illnesses. These filters can be developed using algorithms that process the log and select only the patients (traces) that have the specificed characteristics. The trace variable could be discreted, where only a set of possibilities is valid (in PMApp trace variables can list up maximum 100 options). For example, gender can be male or female. 

## Timed Parallel Automaton (TPA)

A Timed Parallel Automaton is a mathematical tool for defining highly expressive formal workflows. For more details read: 

_Fernandez-Llatas, C.; Pileggi, S.; Traver, V.; Benedi, J. **Timed Parallel Automaton: A Mathematical Tool for Defining Highly Expressive Formal Workflows**, Proceedings of the Modelling Symposium (AMS) 2011 Fifth Asia, Kuala Lumpur, Malaysia, 24-26 May 2011; pp. 56-61._

## Trace

A trace is a sequence of events. Traces may be related to an element or person that performs an activity (a trace may have associated additional data for further calculus such as statistics). For instance, in emergencies, the process could be defined as the composition of activities (arrival, triage, wait, attention, discharge). The result of a patient going through these activities would be a trace composed by events, one (or many) for each of those activities.
