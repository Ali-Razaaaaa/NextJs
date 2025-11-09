const Products = ({ search }) => {
    console.log(search);

    return (
        <h1>
            Search Params: {JSON.stringify(search)}
        </h1>
    );
}

export default Products;
