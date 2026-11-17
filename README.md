# CarScope

## Used-Car Inspection Companion

CarScope is a mobile-friendly React web application designed to help used-car buyers perform a more organized vehicle inspection before making a purchase decision.

Instead of relying only on appearance or memory, CarScope guides users through different vehicle areas, records their findings, and generates a summary of the inspection.

## Project Purpose

Buying a used car can be difficult, especially for first-time buyers who may not know what to inspect or what certain findings could mean.

CarScope provides a structured inspection process that helps users:

- Follow a step-by-step vehicle inspection
- Record findings for each checkpoint
- Add notes and photo evidence
- Track inspection progress
- Identify areas that need attention
- Review the inspection through a generated report
- Save and compare vehicle inspections
- Use a buyer's guide for additional information

CarScope is intended as an inspection aid and does not replace a qualified mechanic, official vehicle verification, or professional legal advice.

## Main Features

### Experience Modes

Users can choose between:

- **Beginner Mode** - provides additional explanations, tips, and guidance for first-time inspectors.
- **Experienced Mode** - provides a more concise inspection with technical information.

### Guided Vehicle Inspection

The inspection is divided into six zones:

1. Exterior
2. Engine Bay
3. Interior
4. Underbody
5. Test Drive
6. Documents

Each zone contains individual checkpoints that users can mark as:

- Good
- Needs Attention
- Immediate Attention

### Findings and Evidence

Users can record:

- Findings
- Notes
- Photo evidence

This allows the inspection to be reviewed later instead of relying on memory.

### Inspection Progress

CarScope tracks:

- Checkpoint completion
- Zone completion
- Overall inspection progress

### Risk Indicator

The application calculates an inspection attention indicator based on recorded findings.

The indicator is intended to help users identify areas that may require closer attention. It does not represent a percentage guarantee of vehicle safety or condition.

### Inspection Report

After an inspection, CarScope generates a report containing:

- Vehicle information
- Inspection progress
- Risk indicator
- Findings summary
- Important findings
- Zone results
- Photo evidence

Incomplete zones can also be reopened directly from the report.

### Saved Inspections

Completed inspections can be saved locally so users can review previous inspections.

### Compare Vehicles

Users can compare saved inspections to help organize their observations when considering multiple vehicles.

### Buyer's Guide

The application also provides additional information to help users understand important vehicle and document checks.

## Technology Stack

- React
- JavaScript ES6+
- HTML5
- CSS3
- Vite
- Git
- GitHub
- Browser Local Storage

## Application Structure

```text
src/
├── components/
│   ├── CheckpointCard.jsx
│   ├── ExperienceMode.jsx
│   ├── FeatureCard.jsx
│   ├── Navbar.jsx
│   └── RiskMeter.jsx
│
├── data/
│   └── checkpoints.js
│
├── hooks/
│   └── useInspectionStorage.js
│
├── pages/
│   ├── BuyersGuide.jsx
│   ├── Compare.jsx
│   ├── Home.jsx
│   ├── Inspection.jsx
│   ├── NewInspection.jsx
│   ├── Report.jsx
│   └── SavedInspections.jsx
│
├── utils/
│   ├── calculateRisk.js
│   └── validation.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx