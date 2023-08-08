import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar h-screen bg-#ef4444 px-0 py-">
      <div className="sidebar-content p-0 m-0">
        <div className="box-border p-4 border-none w-[300px] h-[600px] rounded-box bg-rose-600">
          <div className=" md:box-content">
            <div className="card-title text-white">
              <p>FILTER</p>
            </div>
            <details className="dropdown hover:btn-bg-error mb-32 p-0">
              <summary className="m-1 btn hover:btn-bg-error bg-rose-600 text-white font-bold border-none text-left font-[50px] w-[240px] h-[50px]">Kategori</summary>
              <ul className="p-0  menu dropdown-content z-[1] bg-rose-600 rounded-box w-[270px] text-white">
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
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
