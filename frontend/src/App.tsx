import opensheetmusicdisplay from "opensheetmusicdisplay";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdContainer");
    osmd.setOptions(
      {
        backend: "svg",
        drawingParameters: "compacttight"
      }
    );
    osmd.load("../hello.musicxml").then(
        function() {
          osmd.render();
        }
      );
  }, []);
  
  return (
    <>
      <div id="osmdContainer">
      </div>
    </>
  )
}

export default App
