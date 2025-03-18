let CurrentTime = () => {
    let time = new Date();

    return <h3>
        This is Current Time:{time.toLocaleDateString() }
        <br />
        This is todays Date {time.toLocaleTimeString()}
    </h3>
};

export default CurrentTime;