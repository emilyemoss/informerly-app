jQuery("#simulation")
  .on("click", ".s-78ddab9c-1cc2-4351-8070-e5454650b958 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_2"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "slide",
                      "duration": 800,
                      "direction": "down"
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_1",
                    "effect": {
                      "type": "slide",
                      "duration": 800,
                      "direction": "down"
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_1",
                    "effect": {
                      "type": "slide",
                      "duration": 800,
                      "direction": "down"
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-78ddab9c-1cc2-4351-8070-e5454650b958 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });