export const beginnerGuidance = {
  mileage: {
    title: "Understanding Mileage",
    explanation:
      "Mileage tells you approximately how far the vehicle has been driven. It is useful for judging wear, but mileage alone does not determine whether a car is good or bad.",

    ranges: [
      {
        label: "Generally lower",
        range: "Below 80,000 km",
        level: "good",
        description:
          "Generally favorable based on mileage alone, assuming the vehicle has been properly maintained.",
      },
      {
        label: "Moderate",
        range: "80,000–120,000 km",
        level: "attention",
        description:
          "A common range for a used vehicle. Pay more attention to maintenance history and overall condition.",
      },
      {
        label: "Higher",
        range: "120,000–160,000 km",
        level: "attention",
        description:
          "Higher mileage can mean more wear. Check the vehicle's condition and maintenance records carefully.",
      },
      {
        label: "Very high",
        range: "160,000+ km",
        level: "red",
        description:
          "High mileage does not automatically mean the vehicle is bad, but a careful inspection and maintenance history become especially important.",
      },
    ],

    tip:
      "Do not judge a used car by mileage alone. A well-maintained high-mileage vehicle can be a better choice than a poorly maintained low-mileage vehicle.",

    professional:
      "If you are unsure whether the mileage matches the vehicle's overall condition, consider having the vehicle inspected by a qualified mechanic.",
  },
};

export const inspectionZones = [
  {
    id: "exterior",
    name: "Exterior",
    description:
      "Check the visible outside condition of the vehicle.",

    checkpoints: [
      {
        id: "body-panels",
        zone: "exterior",
        title: "Check the body panels",
        description:
          "Look for obvious dents, scratches, uneven paint, or mismatched body panels.",

        technical:
          "Inspect panel alignment, paint consistency, panel gaps, overspray, and visible signs of previous body repair.",

        beginner: {
          whatToLookFor:
            "Walk around the car slowly and look at each panel from different angles. Check the doors, hood, roof, fenders, and bumpers for dents, scratches, paint that looks different, or gaps that do not look even.",

          tip:
            "Try looking at the car in good lighting. Changes in paint shade or reflections can sometimes make previous repairs easier to notice.",

          warning:
            "A small scratch does not necessarily mean there was major damage. Focus on unusual panel gaps, mismatched paint, or signs of previous repair.",
        },
      },

      {
        id: "tires",
        zone: "exterior",
        title: "Check the tires",
        description:
          "Look at the visible condition of the tires and check for uneven wear.",

        technical:
          "Inspect tread wear, wear consistency across the tire, sidewall condition, and visible signs of abnormal wear.",

        beginner: {
          whatToLookFor:
            "Look at all four tires. Check whether the tread looks reasonably even and whether one tire appears noticeably more worn than the others. Also look for obvious cracks, bulges, or damage on the visible sidewalls.",

          tip:
            "Compare the tires with each other. Uneven wear can be more noticeable when you look at the tires as a set.",

          warning:
            "Do not touch damaged or bulging tires. If a tire looks seriously damaged or unsafe, ask the seller or a qualified professional to inspect it.",
        },
      },

      {
        id: "lights",
        zone: "exterior",
        title: "Check the lights",
        description:
          "Inspect the headlights, brake lights, signal lights, and other visible exterior lights.",

        technical:
          "Check headlamps, tail lamps, brake lamps, indicators, hazard lamps, lens condition, and visible moisture intrusion.",

        beginner: {
          whatToLookFor:
            "Check the headlights, tail lights, brake lights, turn signals, and hazard lights. Look for cracked covers, moisture inside the light housing, or lights that do not appear to work.",

          tip:
            "You may need another person to operate the controls while you stand outside and observe the lights.",

          warning:
            "If a light does not work, record it as something that needs attention rather than assuming it is only a bulb issue.",
        },
      },
    ],
  },

  {
    id: "engine",
    name: "Engine Bay",
    description:
      "Check the visible condition of the engine compartment.",

    checkpoints: [
      {
        id: "engine-leaks",
        zone: "engine",
        title: "Look for visible leaks",
        description:
          "Look for unusual fluid leaks or wet areas around the engine compartment.",

        technical:
          "Inspect for fresh oil, coolant, brake fluid, or other fluid residue around accessible engine components, hoses, and connections.",

        beginner: {
          whatToLookFor:
            "With the engine off and safely accessible, look for unusual wet spots, fresh-looking fluid, or stains around visible parts of the engine bay.",

          tip:
            "Take a photo of anything unusual so you can ask a mechanic or compare it with the vehicle's maintenance records later.",

          warning:
            "Do not touch unknown fluids or reach near hot or moving engine components. If you see a significant leak, have a qualified mechanic inspect it.",
        },
      },

      {
        id: "corrosion",
        zone: "engine",
        title: "Check for corrosion",
        description:
          "Look for visible rust or corrosion around accessible components.",

        technical:
          "Inspect accessible metal components, terminals, connectors, and mounting points for corrosion or oxidation.",

        beginner: {
          whatToLookFor:
            "Look at accessible metal parts and connection areas for unusual rust, corrosion, or white or green buildup around electrical connections.",

          tip:
            "Pay extra attention to unusual corrosion in several different areas rather than judging the entire vehicle from one small spot.",

          warning:
            "Do not remove covers or disconnect electrical components just to inspect them. Leave difficult-to-access areas to a professional.",
        },
      },

      {
        id: "engine-condition",
        zone: "engine",
        title: "Check general engine condition",
        description:
          "Observe the general cleanliness and visible condition of the engine bay.",

        technical:
          "Assess the visible engine bay for abnormal contamination, damaged components, loose connections, missing fasteners, or signs of previous repair.",

        beginner: {
          whatToLookFor:
            "Look at the overall condition of the engine bay. Notice excessive dirt, unusual stains, damaged parts, loose-looking components, or anything that looks significantly different from the surrounding area.",

          tip:
            "A clean engine bay is not automatically proof of good maintenance. Focus on unusual signs and ask about the vehicle's service history.",

          warning:
            "Never place your hands near belts, fans, or other moving parts. Observe the engine safely from a suitable distance.",
        },
      },
    ],
  },

  {
    id: "interior",
    name: "Interior",
    description:
      "Check the condition of the cabin and visible interior components.",

    checkpoints: [
      {
        id: "carpets",
        zone: "interior",
        title: "Check the carpets",
        description:
          "Look for unusual dampness, stains, or signs that the interior may have been exposed to water.",

        technical:
          "Inspect carpet condition, moisture, staining, discoloration, and signs of previous water exposure or interior cleaning.",

        beginner: {
          whatToLookFor:
            "Look at the carpets and visible floor areas for unusual stains, dampness, discoloration, or signs that they may have been recently cleaned to hide something.",

          tip:
            "Check several areas of the cabin instead of looking at only the driver's floor.",

          warning:
            "Unusual moisture or water-related signs can be important, especially when several areas show similar evidence. Ask for professional inspection if you are unsure.",
        },
      },

      {
        id: "seats",
        zone: "interior",
        title: "Check the seats",
        description:
          "Inspect the visible condition and wear of the seats.",

        technical:
          "Inspect upholstery, stitching, seat bolsters, adjustment mechanisms, and wear patterns for condition and consistency with vehicle mileage.",

        beginner: {
          whatToLookFor:
            "Look for tears, unusual stains, excessive wear, damaged stitching, or differences in condition between the seats.",

          tip:
            "Compare the driver's seat with the mileage shown on the vehicle. Heavy wear can be worth asking about, but it does not prove that the mileage is incorrect.",

          warning:
            "Normal wear is expected in a used vehicle. Focus on unusual damage or condition that seems inconsistent with the rest of the vehicle.",
        },
      },

      {
        id: "controls",
        zone: "interior",
        title: "Check interior controls",
        description:
          "Check the visible condition of switches, controls, and other interior features.",

        technical:
          "Verify operation of switches, power windows, locks, air-conditioning controls, lights, wipers, horn, and other accessible electrical functions.",

        beginner: {
          whatToLookFor:
            "Check the dashboard controls, windows, locks, air-conditioning controls, lights, wipers, horn, and other accessible features available in the vehicle.",

          tip:
            "Test one feature at a time and record anything that does not respond normally.",

          warning:
            "Do not attempt repairs during the inspection. Record the issue and ask the seller or a qualified technician about it.",
        },
      },
    ],
  },

  {
    id: "underbody",
    name: "Underbody",
    description:
      "Check visible areas underneath the vehicle safely.",

    checkpoints: [
      {
        id: "underbody-rust",
        zone: "underbody",
        title: "Look for visible rust",
        description:
          "Look for unusual rust or corrosion that may indicate previous exposure or damage.",

        technical:
          "Inspect accessible underbody components for excessive rust, corrosion, weakened-looking metal, or signs of prolonged exposure.",

        beginner: {
          whatToLookFor:
            "From a safe position, look at visible areas underneath the vehicle for unusual rust, corrosion, or damaged-looking metal.",

          tip:
            "Use your phone camera or flashlight from outside the vehicle if it helps you see visible areas more clearly.",

          warning:
            "Do not crawl underneath a vehicle or place yourself under it during an inspection. Ask a qualified mechanic to inspect areas that cannot be safely seen.",
        },
      },

      {
        id: "underbody-damage",
        zone: "underbody",
        title: "Look for visible damage",
        description:
          "Look for obvious signs of previous impact or repair.",

        technical:
          "Inspect accessible structural and suspension-related areas for dents, deformation, damaged panels, missing components, or evidence of previous impact repair.",

        beginner: {
          whatToLookFor:
            "Look for visible dents, bent-looking components, damaged panels, or signs that parts underneath may have been repaired or replaced.",

          tip:
            "If something underneath looks noticeably different from the surrounding area, take a photo and ask a professional about it.",

          warning:
            "Do not touch or move underneath components. Underbody inspection should be performed by a qualified professional when access is difficult or unsafe.",
        },
      },

      {
        id: "fluid-leaks",
        zone: "underbody",
        title: "Check for visible leaks",
        description:
          "Look for fluid spots or other obvious signs of leakage.",

        technical:
          "Inspect the ground and accessible lower components for fresh fluid residue and identify the approximate location of any visible leak.",

        beginner: {
          whatToLookFor:
            "Look at the ground underneath the parked vehicle for unusual fluid spots or fresh-looking leaks.",

          tip:
            "Note the location of the spot and take a photo. The location can help a mechanic identify where the fluid may be coming from.",

          warning:
            "Do not touch or smell unknown fluids. If you see a significant leak, ask a qualified mechanic to inspect the vehicle.",
        },
      },
    ],
  },

  {
    id: "test-drive",
    name: "Test Drive",
    description:
      "Record observations made during the test drive.",

    checkpoints: [
      {
        id: "starting",
        zone: "test-drive",
        title: "Observe starting behavior",
        description:
          "Record whether the vehicle starts normally and note any unusual behavior.",

        technical:
          "Observe starting response, warning indicators, abnormal sounds, engine behavior, and other unusual conditions during a normal start.",

        beginner: {
          whatToLookFor:
            "Observe whether the vehicle starts normally. Pay attention to unusual delays, warning lights, unusual sounds, or behavior that seems different from what you would expect.",

          tip:
            "Let the vehicle owner or another responsible driver operate the vehicle if you are not comfortable driving it yourself.",

          warning:
            "Only test-drive the vehicle when it is legal and safe to do so. Do not attempt to diagnose or repair anything while the vehicle is running.",
        },
      },

      {
        id: "braking",
        zone: "test-drive",
        title: "Observe braking",
        description:
          "Pay attention to unusual behavior or sounds when braking.",

        technical:
          "Evaluate braking response, pedal feel, abnormal noise, vibration, pulling, and other unusual behavior during normal controlled braking.",

        beginner: {
          whatToLookFor:
            "During a safe and controlled drive, pay attention to whether braking feels normal and whether there are unusual sounds, vibrations, or pulling to one side.",

          tip:
            "Focus on what you feel and hear rather than trying to diagnose the exact cause yourself.",

          warning:
            "Never perform aggressive braking or risky maneuvers during a test drive. If the brakes feel unsafe or abnormal, stop the test and have the vehicle inspected.",
        },
      },

      {
        id: "steering",
        zone: "test-drive",
        title: "Observe steering",
        description:
          "Pay attention to unusual steering behavior during the drive.",

        technical:
          "Evaluate steering response, tracking, unusual looseness, resistance, vibration, noise, or inconsistent steering behavior during normal driving.",

        beginner: {
          whatToLookFor:
            "Notice whether the vehicle tracks normally and whether the steering feels unusually loose, difficult, noisy, or inconsistent.",

          tip:
            "Pay attention to unusual behavior during normal, low-risk driving conditions instead of trying to recreate a problem aggressively.",

          warning:
            "If steering feels unsafe or difficult to control, stop the test drive safely and have a qualified mechanic inspect the vehicle.",
        },
      },
    ],
  },

  {
    id: "documents",
    name: "Documents",
    description:
      "Review important vehicle information and documents.",

    checkpoints: [
      {
        id: "or-cr",
        zone: "documents",
        title: "Check OR/CR information",
        description:
          "Record whether the available vehicle registration documents can be reviewed.",

        technical:
          "Compare the vehicle's available registration details with the actual vehicle and note inconsistencies that require official verification.",

        beginner: {
          whatToLookFor:
            "Ask to review the vehicle's available registration documents and compare the important vehicle details with the actual vehicle.",

          tip:
            "Take note of the registered owner's information and vehicle details, but do not share sensitive personal information in your CarScope notes or photos.",

          warning:
            "CarScope does not officially verify ownership or registration. Confirm important information through the proper government channels or with qualified assistance.",
        },
      },

      {
        id: "vehicle-numbers",
        zone: "documents",
        title: "Check vehicle identification numbers",
        description:
          "Record whether the vehicle identification information can be verified against the documents.",

        technical:
          "Compare visible vehicle identification information with the corresponding documentation and record any discrepancies for official verification.",

        beginner: {
          whatToLookFor:
            "Compare the visible vehicle identification information with the corresponding information in the available documents.",

          tip:
            "If the numbers do not match, stop and ask for clarification before proceeding with the purchase.",

          warning:
            "Do not alter, remove, or tamper with identification markings. If something appears inconsistent, seek official verification.",
        },
      },

      {
        id: "deed-of-sale",
        zone: "documents",
        title: "Check ownership documents",
        description:
          "Record whether the available ownership and sale documents can be reviewed.",

        technical:
          "Review available ownership and sale documentation for consistency between the seller, vehicle information, and transaction details. Seek official or legal verification when necessary.",

        beginner: {
          whatToLookFor:
            "Ask to review the available documents related to ownership and the sale of the vehicle. Check whether the information appears consistent with the seller and vehicle documents.",

          tip:
            "Make sure you understand what documents are being provided before agreeing to a purchase.",

          warning:
            "CarScope is only an inspection aid and does not provide legal verification. For ownership or document concerns, seek official or qualified legal assistance.",
        },
      },
    ],
  },
];