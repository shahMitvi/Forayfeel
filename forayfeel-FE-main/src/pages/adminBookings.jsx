import DataTable from "react-data-table-component";
const AdminBookings = () => {
    const columns = [
        {
            name: "Id",
            selector: (row) => row.id,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
    ]


    const data = [
        {
            id: 1,
            name: "xyz"
        },
        {
            id: 2,
            name: "xyz"
        },
        {
            id: 3,
            name: "xyz"
        },
    ]
    return (
        <>
            <h1>Hello</h1>
            <DataTable data={data} />
        </>
    )
}

export default AdminBookings;