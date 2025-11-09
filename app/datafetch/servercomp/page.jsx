import React from 'react';

const ServerComp = async (props) => {
    const name = props.searchParams?.name;

    const response = await fetch(`https://api.genderize.io?name=${name}`);
    const data = await response.json();

    console.log(data);

    return (
        <div>
            ServerComp returning API result - {data.name} (Gender: {data.gender})
        </div>
    );
}

export default ServerComp;
