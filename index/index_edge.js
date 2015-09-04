/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'abel, sans-serif': '<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>',
            'exo, sans-serif': '<script src=\"http://use.edgefonts.net/exo:n4,i4,n7,i7,n1,i1,n3,i3,n5,i9,n8,i8,n2,n9,i2,i5,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'text-bloco',
                            type: 'text',
                            rect: ['-1.6%', 'auto', '110.9%', '137%', 'auto', '-35%'],
                            text: "<p style=\"margin: 0px; line-height: 433.5%; text-indent: 0%;\">​<span style=\"font-size: 5.51em; font-family: exo, sans-serif; font-weight: 800; word-spacing: 0em; letter-spacing: 0em;\">E</span></p>",
                            align: "center",
                            font: ['abel, sans-serif', [100, "px"], "rgba(93,93,93,0.08)", "100", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "319px", "", "none"],
                            transform: [[],['-34']]
                        },
                        {
                            id: 'titulo-1',
                            type: 'text',
                            rect: ['-886px', '18px', '550px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Toque no bloco desejado</p>",
                            align: "center",
                            font: ['exo, sans-serif', [30, "px"], "rgba(93,93,93,1)", "500", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'bloco-a',
                            type: 'group',
                            rect: ['-120.6%', '69.8%', '40', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy',
                                type: 'rect',
                                rect: ['-10.8%', '-11.1%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],[],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['2.6%', '0%', '38px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​A</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "276%", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-n',
                            type: 'group',
                            rect: ['-85.1%', '69.8%', '40', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy14',
                                type: 'rect',
                                rect: ['-12.2%', '-11.1%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],[],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy13',
                                type: 'text',
                                rect: ['0%', '0%', '38px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​N</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "276%", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-b',
                            type: 'group',
                            rect: ['-128.9%', '69.8%', '40', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['-9.9%', '-11.1%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],[],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['2.5%', '0%', '38px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​B</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "276%", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-f',
                            type: 'group',
                            rect: ['-120.6%', '20%', '40', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy5',
                                type: 'rect',
                                rect: ['-10.3%', '-10.7%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],[],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy5',
                                type: 'text',
                                rect: ['2.6%', '0%', '38px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​F</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "276%", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-e',
                            type: 'group',
                            rect: ['-128.9%', '20%', '40', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy4',
                                type: 'rect',
                                rect: ['-9.9%', '-10.8%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],[],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy4',
                                type: 'text',
                                rect: ['2.5%', '0%', '38px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​E</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "276%", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-h',
                            type: 'group',
                            rect: ['-76.6%', '20%', '40', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy7',
                                type: 'rect',
                                rect: ['-9.3%', '-10.8%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],[],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy7',
                                type: 'text',
                                rect: ['2.6%', '0%', '38px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​H</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "276%", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-i',
                            type: 'group',
                            rect: ['-68.2%', '20%', '40', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy9',
                                type: 'rect',
                                rect: ['-8.5%', '-10.8%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],[],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy8',
                                type: 'text',
                                rect: ['2.5%', '0%', '38px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​I</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "276%", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-g',
                            type: 'group',
                            rect: ['60%', '20%', '40', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy8',
                                type: 'rect',
                                rect: ['-12.2%', '-10.8%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],[],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy6',
                                type: 'text',
                                rect: ['-2.5%', '0%', '38px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​G</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "276%", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-c',
                            type: 'group',
                            rect: ['-128.9%', '56.8%', '84', '40', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy2',
                                type: 'rect',
                                rect: ['21%', '-76%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],['90'],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy2',
                                type: 'text',
                                rect: ['1.2%', '5%', '83px', '38px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​C</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-d',
                            type: 'group',
                            rect: ['-128.9%', '44%', '84', '40', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy3',
                                type: 'rect',
                                rect: ['21%', '-76.2%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],['90'],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy3',
                                type: 'text',
                                rect: ['1.2%', '2.5%', '83px', '38px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​D</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-k',
                            type: 'group',
                            rect: ['-76.2%', '55.8%', '84', '40', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy11',
                                type: 'rect',
                                rect: ['21.3%', '-77%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],['90'],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy10',
                                type: 'text',
                                rect: ['1.2%', '2.5%', '83px', '38px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​K</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-j',
                            type: 'group',
                            rect: ['-76.2%', '43.3%', '84', '40', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy10',
                                type: 'rect',
                                rect: ['21.3%', '-77%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],['90'],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy9',
                                type: 'text',
                                rect: ['1.2%', '0%', '83px', '38px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​J</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-m',
                            type: 'group',
                            rect: ['-76.2%', '80.3%', '84', '40', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy13',
                                type: 'rect',
                                rect: ['21.4%', '-77.5%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],['90'],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy12',
                                type: 'text',
                                rect: ['1.2%', '2.5%', '83px', '38px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​M</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'bloco-l',
                            type: 'group',
                            rect: ['-76.2%', '68.3%', '84', '40', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RoundRectCopy12',
                                type: 'rect',
                                rect: ['21.3%', '-77%', '42px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(192,192,192,0)"],
                                stroke: [3,"rgb(104, 198, 154)","solid"],
                                transform: [[],['90'],[],['-0.82307','0.82306']]
                            },
                            {
                                id: 'Text3Copy11',
                                type: 'text',
                                rect: ['1.2%', '2.5%', '83px', '38px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​L</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "600", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'titulo-2',
                            type: 'text',
                            rect: ['97px', '18px', '398px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Toque no apartamento desejado</p>",
                            align: "right",
                            font: ['exo, sans-serif', [26, "px"], "rgba(93,93,93,1)", "500", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'apt-01',
                            type: 'group',
                            rect: ['116px', '128px', '84', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["154px", "154px", "154px", "154px 154px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [3,"rgba(104,198,154,1.00)","solid"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['0px', '1px', '84px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​1<span style=\"font-weight: 700;\">​</span></p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "280%", "", "none"]
                            }]
                        },
                        {
                            id: 'apt-02',
                            type: 'group',
                            rect: ['214px', '128px', '84', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RectangleCopy4',
                                type: 'rect',
                                rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["154px", "154px", "154px", "154px 154px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [3,"rgba(104,198,154,1.00)","solid"]
                            },
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['0px', '1px', '84px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​2<span style=\"font-weight: 700;\">​</span></p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "280%", "", "none"]
                            }]
                        },
                        {
                            id: 'ramal',
                            type: 'text',
                            rect: ['-649px', '129px', '351px', '189px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 187px;\">​<span style=\"color: rgba(93, 93, 93, 0.909804); font-size: 158px;\">102</span></p>",
                            align: "center",
                            userClass: "ramal",
                            font: ['abel, sans-serif', [100, "px"], "rgba(93,93,93,0.0784)", "100", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'apt-03',
                            type: 'group',
                            rect: ['313px', '128px', '84', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RectangleCopy5',
                                type: 'rect',
                                rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["154px", "154px", "154px", "154px 154px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [3,"rgba(104,198,154,1.00)","solid"]
                            },
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['0px', '1px', '84px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​3<span style=\"font-weight: 700;\">​</span></p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "280%", "", "none"]
                            }]
                        },
                        {
                            id: 'apt-04',
                            type: 'group',
                            rect: ['411px', '128px', '84', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RectangleCopy6',
                                type: 'rect',
                                rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["154px", "154px", "154px", "154px 154px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [3,"rgba(104,198,154,1.00)","solid"]
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['0px', '1px', '84px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​4<span style=\"font-weight: 700;\">​</span></p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "280%", "", "none"]
                            }]
                        },
                        {
                            id: 'apt-05',
                            type: 'group',
                            rect: ['116px', '246px', '84', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RectangleCopy10',
                                type: 'rect',
                                rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["154px", "154px", "154px", "154px 154px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [3,"rgba(104,198,154,1.00)","solid"]
                            },
                            {
                                id: 'TextCopy7',
                                type: 'text',
                                rect: ['0px', '2px', '84px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​5<span style=\"font-weight: 700;\">​</span></p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "280%", "", "none"]
                            }]
                        },
                        {
                            id: 'apt-06',
                            type: 'group',
                            rect: ['214px', '246px', '84', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RectangleCopy9',
                                type: 'rect',
                                rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["154px", "154px", "154px", "154px 154px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [3,"rgba(104,198,154,1.00)","solid"]
                            },
                            {
                                id: 'TextCopy6',
                                type: 'text',
                                rect: ['0px', '2px', '84px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​6<span style=\"font-weight: 700;\">​</span></p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "280%", "", "none"]
                            }]
                        },
                        {
                            id: 'apt-07',
                            type: 'group',
                            rect: ['313px', '246px', '84', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RectangleCopy8',
                                type: 'rect',
                                rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["154px", "154px", "154px", "154px 154px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [3,"rgba(104,198,154,1.00)","solid"]
                            },
                            {
                                id: 'TextCopy5',
                                type: 'text',
                                rect: ['0px', '2px', '84px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​7</p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "280%", "", "none"]
                            }]
                        },
                        {
                            id: 'apt-08',
                            type: 'group',
                            rect: ['411px', '246px', '84', '84', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'RectangleCopy7',
                                type: 'rect',
                                rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["154px", "154px", "154px", "154px 154px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [3,"rgba(104,198,154,1.00)","solid"]
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['0px', '2px', '84px', '82px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\">​8<span style=\"font-weight: 700;\">​</span></p>",
                                align: "center",
                                font: ['exo, sans-serif', [1.88, "em"], "rgba(93,93,93,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "280%", "", "none"]
                            }]
                        },
                        {
                            id: 'return',
                            type: 'image',
                            rect: ['57px', '17px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"return.svg",'0px','0px']
                        },
                        {
                            id: 'titulo-2Copy',
                            type: 'text',
                            rect: ['-753px', '18px', '398px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Você deve discar para o RAMAL</p>",
                            align: "right",
                            font: ['exo, sans-serif', [26, "px"], "rgba(93,93,93,1)", "500", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'returnCopy',
                            type: 'image',
                            rect: ['-473px', '17px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"return.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid119",
                            "left",
                            1000,
                            907,
                            "easeInOutQuart",
                            "${apt-04}",
                            '-420px',
                            '411px'
                        ],
                        [
                            "eid180",
                            "left",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${apt-04}",
                            '411px',
                            '-420px'
                        ],
                        [
                            "eid113",
                            "top",
                            1000,
                            846,
                            "easeInOutQuart",
                            "${apt-07}",
                            '246px',
                            '249px'
                        ],
                        [
                            "eid186",
                            "top",
                            2000,
                            846,
                            "easeInOutQuart",
                            "${apt-07}",
                            '249px',
                            '246px'
                        ],
                        [
                            "eid107",
                            "left",
                            1000,
                            907,
                            "easeInOutQuart",
                            "${apt-08}",
                            '-420px',
                            '411px'
                        ],
                        [
                            "eid188",
                            "left",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${apt-08}",
                            '411px',
                            '-420px'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            846,
                            "easeInOutQuart",
                            "${bloco-a}",
                            '-120.58%',
                            '24%'
                        ],
                        [
                            "eid70",
                            "left",
                            1000,
                            846,
                            "easeInOutQuart",
                            "${bloco-a}",
                            '24%',
                            '-120.58%'
                        ],
                        [
                            "eid111",
                            "left",
                            1000,
                            846,
                            "easeInOutQuart",
                            "${apt-07}",
                            '-538px',
                            '292px'
                        ],
                        [
                            "eid187",
                            "left",
                            2000,
                            846,
                            "easeInOutQuart",
                            "${apt-07}",
                            '292px',
                            '-538px'
                        ],
                        [
                            "eid19",
                            "left",
                            0,
                            750,
                            "easeInOutQuart",
                            "${bloco-b}",
                            '-128.95%',
                            '16%'
                        ],
                        [
                            "eid68",
                            "left",
                            1000,
                            750,
                            "easeInOutQuart",
                            "${bloco-b}",
                            '16%',
                            '-128.95%'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            803,
                            "easeInOutQuart",
                            "${bloco-h}",
                            '-76.58%',
                            '68.36%'
                        ],
                        [
                            "eid65",
                            "left",
                            1000,
                            803,
                            "easeInOutQuart",
                            "${bloco-h}",
                            '68.36%',
                            '-76.58%'
                        ],
                        [
                            "eid109",
                            "top",
                            1000,
                            907,
                            "easeInOutQuart",
                            "${apt-08}",
                            '246px',
                            '249px'
                        ],
                        [
                            "eid189",
                            "top",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${apt-08}",
                            '249px',
                            '246px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            846,
                            "easeInOutQuart",
                            "${bloco-n}",
                            '-85.13%',
                            '59.82%'
                        ],
                        [
                            "eid69",
                            "left",
                            1000,
                            846,
                            "easeInOutQuart",
                            "${bloco-n}",
                            '59.82%',
                            '-85.13%'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            903,
                            "easeInOutQuart",
                            "${bloco-k}",
                            '-76.22%',
                            '68.73%'
                        ],
                        [
                            "eid58",
                            "left",
                            1004,
                            903,
                            "easeInOutQuart",
                            "${bloco-k}",
                            '68.73%',
                            '-76.22%'
                        ],
                        [
                            "eid162",
                            "height",
                            1907,
                            0,
                            "easeInOutQuart",
                            "${text-bloco}",
                            '137%',
                            '137%'
                        ],
                        [
                            "eid168",
                            "height",
                            2000,
                            0,
                            "easeInOutQuart",
                            "${text-bloco}",
                            '137%',
                            '137%'
                        ],
                        [
                            "eid103",
                            "left",
                            1000,
                            846,
                            "easeInOutQuart",
                            "${apt-03}",
                            '-538px',
                            '292px'
                        ],
                        [
                            "eid178",
                            "left",
                            2000,
                            846,
                            "easeInOutQuart",
                            "${apt-03}",
                            '292px',
                            '-538px'
                        ],
                        [
                            "eid151",
                            "left",
                            1000,
                            907,
                            "easeInOutQuart",
                            "${text-bloco}",
                            '-137.27%',
                            '-1.64%'
                        ],
                        [
                            "eid170",
                            "left",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${text-bloco}",
                            '-1.64%',
                            '-137.27%'
                        ],
                        [
                            "eid115",
                            "left",
                            1000,
                            703,
                            "easeInOutQuart",
                            "${apt-06}",
                            '-657px',
                            '173px'
                        ],
                        [
                            "eid184",
                            "left",
                            2000,
                            703,
                            "easeInOutQuart",
                            "${apt-06}",
                            '173px',
                            '-657px'
                        ],
                        [
                            "eid147",
                            "font-size",
                            1907,
                            0,
                            "easeInOutQuart",
                            "${titulo-2}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid165",
                            "font-size",
                            2000,
                            0,
                            "easeInOutQuart",
                            "${titulo-2}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid149",
                            "width",
                            1907,
                            0,
                            "easeInOutQuart",
                            "${Stage}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid22",
                            "left",
                            0,
                            750,
                            "easeInOutQuart",
                            "${bloco-l}",
                            '-76.22%',
                            '68.73%'
                        ],
                        [
                            "eid52",
                            "left",
                            1000,
                            750,
                            "easeInOutQuart",
                            "${bloco-l}",
                            '68.73%',
                            '-76.22%'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            803,
                            "easeInOutExpo",
                            "${Text3Copy6}",
                            '2.53%',
                            '-2.53%'
                        ],
                        [
                            "eid63",
                            "left",
                            1000,
                            803,
                            "easeInOutExpo",
                            "${Text3Copy6}",
                            '-2.53%',
                            '2.53%'
                        ],
                        [
                            "eid156",
                            "bottom",
                            1000,
                            907,
                            "easeInOutQuart",
                            "${text-bloco}",
                            '1.81%',
                            '-35%'
                        ],
                        [
                            "eid171",
                            "bottom",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${text-bloco}",
                            '-35%',
                            '1.81%'
                        ],
                        [
                            "eid21",
                            "left",
                            0,
                            750,
                            "easeInOutQuart",
                            "${bloco-d}",
                            '-128.95%',
                            '16%'
                        ],
                        [
                            "eid59",
                            "left",
                            1002,
                            750,
                            "easeInOutQuart",
                            "${bloco-d}",
                            '16%',
                            '-128.95%'
                        ],
                        [
                            "eid32",
                            "left",
                            0,
                            846,
                            "easeInOutQuart",
                            "${bloco-g}",
                            '-85.13%',
                            '60%'
                        ],
                        [
                            "eid62",
                            "left",
                            1007,
                            846,
                            "easeInOutQuart",
                            "${bloco-g}",
                            '60%',
                            '-85.13%'
                        ],
                        [
                            "eid97",
                            "top",
                            1000,
                            655,
                            "easeInOutQuart",
                            "${apt-05}",
                            '246px',
                            '249px'
                        ],
                        [
                            "eid182",
                            "top",
                            2000,
                            655,
                            "easeInOutQuart",
                            "${apt-05}",
                            '249px',
                            '246px'
                        ],
                        [
                            "eid193",
                            "left",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${returnCopy}",
                            '-473px',
                            '57px'
                        ],
                        [
                            "eid125",
                            "top",
                            1000,
                            803,
                            "easeInOutQuart",
                            "${apt-01}",
                            '128px',
                            '131px'
                        ],
                        [
                            "eid172",
                            "top",
                            2000,
                            803,
                            "easeInOutQuart",
                            "${apt-01}",
                            '131px',
                            '128px'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            846,
                            "easeInOutQuart",
                            "${bloco-c}",
                            '-128.95%',
                            '16%'
                        ],
                        [
                            "eid61",
                            "left",
                            1015,
                            846,
                            "easeInOutQuart",
                            "${bloco-c}",
                            '16%',
                            '-128.95%'
                        ],
                        [
                            "eid101",
                            "top",
                            1000,
                            803,
                            "easeInOutQuart",
                            "${apt-02}",
                            '128px',
                            '131px'
                        ],
                        [
                            "eid194",
                            "top",
                            2000,
                            803,
                            "easeInOutQuart",
                            "${apt-02}",
                            '131px',
                            '128px'
                        ],
                        [
                            "eid117",
                            "top",
                            1000,
                            703,
                            "easeInOutQuart",
                            "${apt-06}",
                            '246px',
                            '249px'
                        ],
                        [
                            "eid185",
                            "top",
                            2000,
                            703,
                            "easeInOutQuart",
                            "${apt-06}",
                            '249px',
                            '246px'
                        ],
                        [
                            "eid144",
                            "left",
                            1000,
                            907,
                            "easeInOutQuart",
                            "${return}",
                            '-317px',
                            '57px'
                        ],
                        [
                            "eid164",
                            "left",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${return}",
                            '57px',
                            '-317px'
                        ],
                        [
                            "eid75",
                            "left",
                            1000,
                            907,
                            "easeInOutQuart",
                            "${titulo-2}",
                            '-837px',
                            '97px'
                        ],
                        [
                            "eid166",
                            "left",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${titulo-2}",
                            '97px',
                            '-837px'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            703,
                            "easeInOutQuart",
                            "${bloco-e}",
                            '-128.95%',
                            '16%'
                        ],
                        [
                            "eid66",
                            "left",
                            1000,
                            703,
                            "easeInOutQuart",
                            "${bloco-e}",
                            '16%',
                            '-128.95%'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            846,
                            "easeInOutQuart",
                            "${bloco-m}",
                            '-76.22%',
                            '68.73%'
                        ],
                        [
                            "eid56",
                            "left",
                            1005,
                            846,
                            "easeInOutQuart",
                            "${bloco-m}",
                            '68.73%',
                            '-76.22%'
                        ],
                        [
                            "eid123",
                            "left",
                            1000,
                            750,
                            "easeInOutQuart",
                            "${apt-01}",
                            '-775px',
                            '55px'
                        ],
                        [
                            "eid128",
                            "left",
                            1750,
                            0,
                            "easeInOutQuart",
                            "${apt-01}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid174",
                            "left",
                            2053,
                            750,
                            "easeOutQuart",
                            "${apt-01}",
                            '55px',
                            '-775px'
                        ],
                        [
                            "eid31",
                            "left",
                            0,
                            750,
                            "easeInOutQuart",
                            "${bloco-i}",
                            '-68.22%',
                            '76.73%'
                        ],
                        [
                            "eid64",
                            "left",
                            1013,
                            750,
                            "easeInOutQuart",
                            "${bloco-i}",
                            '76.73%',
                            '-68.22%'
                        ],
                        [
                            "eid73",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,1)'
                        ],
                        [
                            "eid95",
                            "left",
                            1000,
                            655,
                            "easeInOutQuart",
                            "${apt-05}",
                            '-775px',
                            '55px'
                        ],
                        [
                            "eid183",
                            "left",
                            2000,
                            655,
                            "easeInOutQuart",
                            "${apt-05}",
                            '55px',
                            '-775px'
                        ],
                        [
                            "eid146",
                            "width",
                            1907,
                            0,
                            "easeInOutQuart",
                            "${titulo-2}",
                            '398px',
                            '398px'
                        ],
                        [
                            "eid167",
                            "width",
                            2000,
                            0,
                            "easeInOutQuart",
                            "${titulo-2}",
                            '398px',
                            '398px'
                        ],
                        [
                            "eid105",
                            "top",
                            1000,
                            846,
                            "easeInOutQuart",
                            "${apt-03}",
                            '128px',
                            '131px'
                        ],
                        [
                            "eid179",
                            "top",
                            2000,
                            846,
                            "easeInOutQuart",
                            "${apt-03}",
                            '131px',
                            '128px'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            803,
                            "easeInOutQuart",
                            "${bloco-j}",
                            '-76.22%',
                            '68.73%'
                        ],
                        [
                            "eid57",
                            "left",
                            1000,
                            803,
                            "easeInOutQuart",
                            "${bloco-j}",
                            '68.73%',
                            '-76.22%'
                        ],
                        [
                            "eid163",
                            "width",
                            1907,
                            0,
                            "easeInOutQuart",
                            "${text-bloco}",
                            '110.93%',
                            '110.93%'
                        ],
                        [
                            "eid169",
                            "width",
                            2000,
                            0,
                            "easeInOutQuart",
                            "${text-bloco}",
                            '110.93%',
                            '110.93%'
                        ],
                        [
                            "eid34",
                            "left",
                            0,
                            655,
                            "easeInOutQuart",
                            "${titulo-1}",
                            '-886px',
                            '0px'
                        ],
                        [
                            "eid72",
                            "left",
                            1000,
                            655,
                            "easeInOutQuart",
                            "${titulo-1}",
                            '0px',
                            '-886px'
                        ],
                        [
                            "eid121",
                            "top",
                            1000,
                            907,
                            "easeInOutQuart",
                            "${apt-04}",
                            '128px',
                            '131px'
                        ],
                        [
                            "eid181",
                            "top",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${apt-04}",
                            '131px',
                            '128px'
                        ],
                        [
                            "eid191",
                            "left",
                            2000,
                            907,
                            "easeInOutQuart",
                            "${titulo-2Copy}",
                            '-753px',
                            '97px'
                        ],
                        [
                            "eid99",
                            "left",
                            1000,
                            803,
                            "easeInOutQuart",
                            "${apt-02}",
                            '-657px',
                            '173px'
                        ],
                        [
                            "eid195",
                            "left",
                            2000,
                            803,
                            "easeInOutQuart",
                            "${apt-02}",
                            '173px',
                            '-657px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            803,
                            "easeInOutQuart",
                            "${bloco-f}",
                            '-120.58%',
                            '24.36%'
                        ],
                        [
                            "eid67",
                            "left",
                            1000,
                            803,
                            "easeInOutQuart",
                            "${bloco-f}",
                            '24.36%',
                            '-120.58%'
                        ],
                        [
                            "eid197",
                            "left",
                            2000,
                            1000,
                            "easeInOutQuart",
                            "${ramal}",
                            '-649px',
                            '99px'
                        ]
                    ]
                }
            },
            "btn-bloco-i": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['38.1%', '0%', '197', '70', 'auto', 'auto'],
                            title: 'bloco-i',
                            id: 'btn_bloco_i',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '191px', '64px', 'auto', 'auto'],
                                borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                                id: 'Rectangle',
                                stroke: [3, 'rgba(104,198,154,1.00)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'text',
                                id: 'Bloco_I',
                                text: '<p style=\"margin: 0px;\">​Bloco I</p>',
                                rect: ['18px', '20px', '135px', '32px', 'auto', 'auto'],
                                font: ['abel, sans-serif', [24, ''], 'rgba(93,93,93,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '610px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "left",
                            0,
                            1000,
                            "easeInOutQuart",
                            "${Bloco_I}",
                            '-413px',
                            '18px'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            750,
                            "easeInOutQuart",
                            "${Rectangle}",
                            '-393px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-109315491");
