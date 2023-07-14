const NewUser = () => {
  return (
    <div className="flex-[4] p-5">
      <h1 className="text-3xl font-semibold">New User</h1>
      <form className="flex flex-wrap">
        <div className="w-[500px] flex flex-col mt-3 mr-5 ">
          <label className="mb-2 text-sm font-semibold text-gray-500">Username</label>
          <input type="text" placeholder="jhon" className="h-8 p-1 border border-gray-500 outline-none rounded" />
        </div>
        <div className="w-[500px] flex flex-col mt-3 mr-5 ">
          <label className="mb-2 text-sm font-semibold text-gray-500">Fullname</label>
          <input type="text" placeholder="Jhon Abraham" className="h-8 p-1 border border-gray-500 outline-none rounded" />
        </div>
        <div className="w-[500px] flex flex-col mt-3 mr-5 ">
          <label className="mb-2 text-sm font-semibold text-gray-500">Email</label>
          <input type="text" placeholder="jhon@gmail.com" className="h-8 p-1 border border-gray-500 outline-none rounded" />
        </div>
        <div className="w-[500px] flex flex-col mt-3 mr-5 ">
          <label className="mb-2 text-sm font-semibold text-gray-500">Password</label>
          <input type="password" placeholder="Password" className="h-8 p-1 border border-gray-500 outline-none rounded" />
        </div>
        <div className="w-[500px] flex flex-col mt-3 mr-5 ">
          <label className="mb-2 text-sm font-semibold text-gray-500">Phone</label>
          <input type="number" placeholder="123-456-7890" className="h-8 p-1 border border-gray-500 outline-none rounded" />
        </div>
        <div className="w-[500px] flex flex-col mt-3 mr-5 ">
          <label className="mb-2 text-sm font-semibold text-gray-500">Address</label>
          <input type="text" placeholder="Perinthalmanna" className="h-8 p-1 border border-gray-500 outline-none rounded" />
        </div>
        <div className="w-[500px] flex flex-col mt-3 mr-5 ">
          <label className="mb-2 text-sm font-semibold text-gray-500">Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              placeholder="Perinthalmanna"
              className="mt-4"
            />
            <label htmlFor="male" className="m-3 text-lg text-[#555]" >Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              placeholder="Perinthalmanna"
              className="mt-4"
            />
            <label htmlFor="female" className="m-3 text-lg text-[#555]" >Female</label>
            <input
              type="radio"
              name="gender"
              id="others"
              value="others"
              placeholder="Perinthalmanna"
              className="mt-4"
            />
            <label htmlFor="others" className="m-3 text-lg text-[#555]" > Other</label>
          </div>
        </div>
        <div className="w-[500px] flex flex-col mt-3 mr-5 ">
            <label className="mb-2 text-sm font-semibold text-gray-500">Active</label>
            <select name="active" id="active" className="outline-none border border-gray-500 ">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="w-[200px] bg-blue-800 text-white px-3 py-2 font-semibold cursor-pointer rounded mt-10" >Create</button>
      </form>
    </div>
  );
};

export default NewUser;
