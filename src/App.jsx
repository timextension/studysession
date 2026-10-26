import StudySession from "./StudySession";

function App(){
  return (
    <div>
    <StudySession 
    title="Study Session Tracker"
    session="Opiskelukerta"
    subject="JavaScript"
    goal={45}
    />
    </div>
  );
}

export default App;