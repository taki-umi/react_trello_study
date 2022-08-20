import logo from "./logo.svg";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  return (
    <div className="dragDropArea">
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <dev {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId="item0" index={0}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    item0
                  </div>
                )}
              </Draggable>
            </dev>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
