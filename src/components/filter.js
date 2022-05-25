function Filter(props) {

  const handleChangeFilter = (value) => {
    let tempdata = JSON.parse(JSON.stringify(props.filters));
    if (props.filters.includes(value)) {
      const index = tempdata.indexOf(value);
      console.log(JSON.parse(JSON.stringify(props.filters)))
      tempdata.splice(index, 1);
    } else {
      tempdata.push(value)
    }
    props.setFilters(tempdata)
  }

  return <div className="mb-4"  > <p className="m-5 mt-2 mb-2 fw-bold">Price</p>
    <div className="form-check mx-5">
      <input className="form-check-input" type="checkbox" checked={props.filters.includes(1)} id="defaultCheck1" onChange={() => { handleChangeFilter(1) }} />
      <label className="form-check-label">
        Rs 1 to Rs 1000
      </label>
    </div>
    <div className="form-check mx-5">
      <input className="form-check-input" type="checkbox" checked={props.filters.includes(2)} id="defaultCheck2" onChange={() => { handleChangeFilter(2) }} />
      <label className="form-check-label">
        Rs 1000 and above
      </label>
    </div>
  </div>
}
export default Filter;