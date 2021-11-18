import { useState } from "react";

const InlineStyleComponent = () => {
    const [state, setState] = useState("");
    return ( 
        <div>
            <h1>inline dynamic style component</h1>
            <input style={ {color: state.length <= 5? "red": "green"} } type="text"  value={state} onChange={(e) => setState(e.target.value)} />
        </div>
     );
}
 
export default InlineStyleComponent;