import axios from 'axios';

export default function makeData(count) {
  // setTimeout(() => {
  //  let data = [
  //   {
  //       'id' : 1,
  //       'name': 'Alice',
  //       'dept' : 'IT',
  //       'salary': 10000
  //   },
  //   {
  //     'id' : 2,
  //     'name': 'Bob',
  //     'dept' : 'Director',
  //     'salary': 12000
  // }
  // ]


  // let obj = { columns: columns, data: data, skipReset: false };

  // console.log(obj)
  // return obj;
  // }, 10000);

  let columns = [
    {
      id: "id",
      label: "Id",
      accessor: "id",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "name",
      label: "Name",
      accessor: "name",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "dept",
      label: "Department",
      accessor: "dept",
      width: 80,
      dataType: "text",
      options: []
    },
    {
      id: "salary",
      label: "Salary",
      accessor: "salary",
      width: 300,
      dataType: "number",
      options: []
    },
  ];

  let data = []

  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/employees/', false);
  xhr.send();

  if (xhr.status == 200) {

    let jsonresp = JSON.parse(xhr.responseText);
    let parsedObject = JSON.parse(jsonresp);

    let employees = parsedObject.map(emp => {
      return {
        id: emp.pk,
        name: emp.fields.name,
        dept: emp.fields.department,
        salary: emp.fields.salary
      }
    });
    data = employees;
  } else {
    console.log('Error', xhr.statusText);
  }

  let obj = { columns: columns, data: data, skipReset: false };
  return obj;
  // try {
  //   const response = await axios.get('/employees/');
  //   let jsonresp = JSON.parse(response.data);
  //   employees = jsonresp.map(emp => {
  //     return {
  //       id: emp.pk,
  //       name: emp.fields.name,
  //       dept: emp.fields.department,
  //       salary: emp.fields.salary
  //     }
  //   });
  //   console.log(employees);
  //   return { columns: columns, data: employees, skipReset: false };
  // } catch (error) {
  //   console.log(error);
  //   return { columns: [], data: [], skipReset: false };
  // }

  //  await axios.get('/employees/').then(response => {
  //     if (response.data.length > 0) {
  //       let jsonresp = JSON.parse(response.data);
  //       console.log("err")
  //       employees = jsonresp.map(emp => {
  //         return {
  //           id: emp.pk,
  //           name: emp.fields.name,
  //           dept: emp.fields.department,
  //           salary: emp.fields.salary
  //         }
  //       });
  //       console.log("sec", employees);
  //       return { columns: columns, data: employees, skipReset: false };
  //     }
  //   }).catch(err => console.error(err));

}
