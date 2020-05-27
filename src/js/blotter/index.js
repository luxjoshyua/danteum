import "./blotter-min";
import "./channelSplitMaterial";

// console.log("here!");

var text = new Blotter.Text("Hello", {
  family: "serif",
  size: 120,
  fill: "#171717",
});

var material = new Blotter.ChannelSplitMaterial();

var blotter = new Blotter(material, { texts: text });

var scope = blotter.forText(text);

scope.appendTo(document.body);
