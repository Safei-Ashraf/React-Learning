import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';



const App = () => {
    return ( 
        <>
            <div className="ui container comments">

            <ApprovalCard>
                <Comment 
                name="Safei" 
                time=" Today At 8:13 AM" 
                image={faker.image.image()}
                content="Cool post bro!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <Comment 
                name="Seif" 
                time=" Today At 5:10 PM" 
                image={faker.image.image()}
                content="I don't like it"
                />
            </ApprovalCard>

            <ApprovalCard>
                <Comment 
                name="Taqei" 
                time=" Yesterday At 8:13 AM" 
                image={faker.image.image()}
                content="Nooooooooooooo!"
                />
            </ApprovalCard>

            </div>
        </>
        );
}
export default App;

ReactDOM.render(<App/>,document.querySelector('#root'));