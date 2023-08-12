const CreateDog =  (props) => {

return(
    <div>
  <form action="/action_page.php">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Confident</label><br></br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2"> Alert</label><br></br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Friendly</label><br></br>
  <input type="checkbox" id="vehicle4" name="vehicle1" value="Bike"/>
  <label for="vehicle4"> Outgoing</label><br></br>
  <input type="checkbox" id="vehicle5" name="vehicle2" value="Car"/>
  <label for="vehicle5"> Dutiful</label><br></br>
  <input type="checkbox" id="vehicle6" name="vehicle3" value="Boat"/>
  <label for="vehicle6"> Hardworking</label><br></br>
  <input type="submit" value="Submit"/><br></br>
</form>
    </div>
)

}