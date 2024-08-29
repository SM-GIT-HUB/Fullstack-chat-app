/* eslint-disable react/prop-types */

function GenderCheck({handleCheckbox, selectedGender}) {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-white">Male</span>
                <input type="checkbox" name="" id="" className="checkbox border-white" 
                checked={selectedGender == "male"}
                onChange={() => { handleCheckbox("male") }}
                />
            </label>
        </div>

        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-white">Female</span>
                <input type="checkbox" className="checkbox border-white" 
                checked={selectedGender == "female"}
                onChange={() => { handleCheckbox("female") }}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheck