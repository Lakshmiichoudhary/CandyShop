
const Form = () => {
    return (
        <form className="form">
            <label>
                Name 
                <input type="text" placeholder="name"/>
            </label>
            <label>
                Description
                <input type="text" placeholder="description"/>
            </label>
            <label>
                price 
                <input type="number" placeholder="price"/>
            </label>
            <button className="button">Submit</button>
        </form>
    );

}

export default Form