// OSC Messages

// Websocket Stuff
var isReady = false
var oscPort = new osc.WebSocketPort({
    url: "ws://localhost:8081", // URL to your Web Socket server.
    metadata: true
});
oscPort.open();
oscPort.on("message", function (oscMsg) {
    console.log("An OSC message just arrived!", oscMsg);
});

// For most Ports, send() should only be called after the "ready" event fires.
oscPort.on("ready", function () {
    isReady = true
});


// Begin OSC Elate

// Layer 1

function playlayer1clip1() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 1 Clip 1")
        oscPort.send({
        address: "/composition/layers/1/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer1clip2() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 1 Clip 2")
        oscPort.send({
        address: "/composition/layers/1/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer1clip3() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 1 Clip 3")
        oscPort.send({
        address: "/composition/layers/1/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer1clip4() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 1 Clip 4")
        oscPort.send({
        address: "/composition/layers/1/clips/4/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer1clip5() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 1 Clip 5")
        oscPort.send({
        address: "/composition/layers/1/clips/5/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function stoplayer1() {
    if(isReady) {
        console.log("Sending OSC message: Stop Layer 1 Step 1of2")
        oscPort.send({
        address: "/composition/layers/1/clear",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
    if(isReady) {
        console.log("Sending OSC message: Stop Layer 1 Step 2of2")
        oscPort.send({
        address: "/composition/layers/1/clear",
        args: [
            {
                type: "f",
                value: 0,
                DelayNode: 10
            }
        ]
    });
    }
}


function nextlayer1() {
    if(isReady) {
        console.log("Sending OSC message: Next clip in Layer 1")
        oscPort.send({
        address: "/composition/layers/1/connectnextclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function previouslayer1() {
    if(isReady) {
        console.log("Sending OSC message: Previous clip in Layer 1 Step 1of2")
        oscPort.send({
        address: "/composition/layers/1/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
    if(isReady) {
        console.log("Sending OSC message: Previous clip in Layer 1 Step 2of2")
        oscPort.send({
        address: "/composition/layers/1/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}


// Layer 2

function playlayer2clip1() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 2 Clip 1")
        oscPort.send({
        address: "/composition/layers/2/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer2clip2() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 2 Clip 2")
        oscPort.send({
        address: "/composition/layers/2/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer2clip3() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 2 Clip 3")
        oscPort.send({
        address: "/composition/layers/2/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer2clip4() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 2 Clip 4")
        oscPort.send({
        address: "/composition/layers/2/clips/4/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer2clip5() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 2 Clip 5")
        oscPort.send({
        address: "/composition/layers/2/clips/5/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function stoplayer2() {
    if(isReady) {
        console.log("Sending OSC message: Stop Layer 2 Step 1of2")
        oscPort.send({
        address: "/composition/layers/2/clear",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
    if(isReady) {
        console.log("Sending OSC message: Stop Layer 2 Step 2of2")
        oscPort.send({
        address: "/composition/layers/2/clear",
        args: [
            {
                type: "f",
                value: 0,
                DelayNode: 10
            }
        ]
    });
    }
}


function nextlayer2() {
    if(isReady) {
        console.log("Sending OSC message: Next clip in Layer 2")
        oscPort.send({
        address: "/composition/layers/2/connectnextclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function previouslayer2() {
    if(isReady) {
        console.log("Sending OSC message: Previous clip in Layer 2 Step 1of2")
        oscPort.send({
        address: "/composition/layers/2/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
    if(isReady) {
        console.log("Sending OSC message: Previous clip in Layer 2 Step 2of2")
        oscPort.send({
        address: "/composition/layers/2/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}


// Layer 3

function playlayer3clip1() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 3 Clip 1")
        oscPort.send({
        address: "/composition/layers/3/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer3clip2() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 3 Clip 2")
        oscPort.send({
        address: "/composition/layers/3/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer3clip3() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 3 Clip 3")
        oscPort.send({
        address: "/composition/layers/3/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer3clip4() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 3 Clip 4")
        oscPort.send({
        address: "/composition/layers/3/clips/4/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playlayer3clip5() {
    if(isReady) {
        console.log("Sending OSC message: Play Layer 3 Clip 5")
        oscPort.send({
        address: "/composition/layers/3/clips/5/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function stoplayer3() {
    if(isReady) {
        console.log("Sending OSC message: Stop Layer 3 Step 1of2")
        oscPort.send({
        address: "/composition/layers/3/clear",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
    if(isReady) {
        console.log("Sending OSC message: Stop Layer 3 Step 2of2")
        oscPort.send({
        address: "/composition/layers/3/clear",
        args: [
            {
                type: "f",
                value: 0,
                DelayNode: 10
            }
        ]
    });
    }
}


function nextlayer3() {
    if(isReady) {
        console.log("Sending OSC message: Next clip in Layer 3")
        oscPort.send({
        address: "/composition/layers/3/connectnextclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function previouslayer3() {
    if(isReady) {
        console.log("Sending OSC message: Previous clip in Layer 3 Step 1of2")
        oscPort.send({
        address: "/composition/layers/3/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
    if(isReady) {
        console.log("Sending OSC message: Previous clip in Layer 3 Step 2of2")
        oscPort.send({
        address: "/composition/layers/3/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}