<div>
  <!-- <h1>Athenaeum</h1> -->
   <table class="table col-sm-12">
    <form class="form">
        <tr>
        <td>
          <label>First Name</label><span>*</span>
          <input type="text" name="fname" ng-model="student.firstName" placeholder="Enter first name.."  class="form-control"/>
        </td>
        <td>
          <label>Last Name</label><span>*</span>
          <input type="text" name="fname" ng-model="student.lastName" placeholder="Enter last name.." class="form-control" />
      </td>
      </tr>
      <tr>
      <td><label>Father's Name</label>
        <input type="text" name="fatherName" ng-model="student.fatherName" placeholder="Eneter your father name.." class="form-control"/>
      </td><td>
        <label>Email Address</label>
        <input type="text" name="email" ng-model="student.email" class="form-control" placeholder="email.." />
      </td>
        </tr>
        <tr><td><label>Contact Number</label><span>*</span>
            <input type="number" name="contactNumber" ng-model="student.contactNumber" placeholder="Enter your contact number" class="form-control"/></td>
        <td><label>Id Proof</label><span>*</span>
          <input type="text" name="proof" placeholder="Govermanet or college or coaching id name.." ng-model="student.typeOfProofId" class="form-control"/>
        </td>
      </tr>
      <tr>
    <td> 
      <label>Joining date</label><span>*</span>
      <input type="text" name="dateOfJoining" id ="joiningDate" ng-model="student.dateOfJoining" class="form-control" value="" placeholder="dd/mm/yyyy" />
      <button ng-click="selectTodayDate()" class="btn-primary">Add System Date</button>       
 </td>
 <td>
        <label>Last Date</label>
        <input type="text" name="dateOfJoining"  ng-model="student.expirationDate" class="form-control" value="" placeholder="dd/mm/yyyy" />      
</td>
</tr>
<tr>
  <td><label>Fee Amount</label><span>*</span>
  <input type="number" name="fee" ng-model="student.feeAmount" class="form-control"/>
  </td>
  <td>
    <label>Shift</label>*
    <select class="form-control">
      <option value="1" >Morning</option>
      <option value="2" >Evening</option>
      <option value="3" >Night</option>
    </select>
  </td>
</tr>
<tr>
  <td colspan="">
    <label>Select Seat number</label><span>*</span>
      <input type="number" ng-model="student.seatNumber" value="2" class="form-control" />
  </td>
  <td></td>
</tr>
<tr>
  <td colspan="2">
    <button class="btn btn-primary btn-block" ng-click="addNewStudent(student)">Submit</button>
  </td>>
</tr>
    </form>
    </table>

</div>