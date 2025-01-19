import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchEmployee } from "../../Api/Api";

export default function Home() {
  const [employeeList, setEmployeeList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageData, setPageData] = useState([]);
  const itemPerPage = 5;

  useEffect(() => {
    const response = fetchEmployee();
    response.then((data) => {
      setEmployeeList(data);
    });
  }, []);

  useEffect(() => {
    setPageData(
      employeeList.slice(
        itemPerPage * (pageNumber - 1),
        itemPerPage * pageNumber
      )
    );
  }, [employeeList, pageNumber]);

  const prevHandler = () => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const nextHandler = () => {
    setPageNumber((prev) => {
      const lastPage = Math.ceil(employeeList.length / itemPerPage);
      if (prev + 1 > lastPage) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className={styles.employeeContainer}>
      <h1>Employee Data Table</h1>
      <table className={styles.table}>
        <thead >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((employee) => (
            <tr key={employee.id} className={styles.tableTr}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationWrapper}>
        <button className={styles.pageButton} onClick={prevHandler}>
          Previous
        </button>
        <div className={styles.pageNo}> {pageNumber} </div>
        <button className={styles.pageButton} onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
}
