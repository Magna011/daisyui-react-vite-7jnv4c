import React from 'react';

const SideBar2 = () => {
  return (
    <div className="sidebar h-screen bg-#ef4444 px-0 py-">
      <div className="sidebar-content p-0 m-0">
        <div className="box-border p-4 border-none w-[300px] h-[650px] rounded-box bg-rose-600">
          <div className=" md:box-content">
            <div className="collapse-title font-bold font-[120px] text-white">
              <p>FILTER</p>
            </div>
            <div className="collapse bg-rose-600 p-2 m-0 ">
              <input type="checkbox" />
              <div className="collapse-title text-m text-white font-medium">
                Kategori
              </div>
              <div className="collapse-content text-white">
                <ul className="p-0 menu z-[1] bg-rose-600 rounded-box w-[270px]">
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori1" />
                    Kategori 1
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori2" />
                    Kategori 2
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori3" />
                    Kategori 3
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori4" />
                    Kategori 4
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori5" />
                    Kategori 5
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori6" />
                    Kategori 6
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori7" />
                    Kategori 7
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori8" />
                    Kategori 8
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori9" />
                    Kategori 9
                  </a>
                </li>
                <li>
                  <a>
                    <input type="radio" name="kategori" value="kategori10" />
                    Kategori 10
                  </a>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar2;
