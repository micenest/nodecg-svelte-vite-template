<script>
  import { Mice }  from "../mice-draft";
  let mc = new Mice();
  let repname = 'dropdown';
  let dropdown;
  mc.checkReplicant(repname[0], ['test 1', 'test 2', false]).then(value => {
    dropdown = value;
  });
  class Tournament {
    dropdownUpdate() {
      if (mode ===  'opt2') {
        dropdown[2] = false;
        setTimeout(function () {
          dropdown = ['sample 1', 'sample 2'];
          dropdown[2] = true; 
        }, 3000);
      }
    }
  }
  const tn = new Tournament();
  $: mc.changeReplicant(dropdown, repname);
</script>
<div>
  <div style="display: flex; flex-direction: row; align-items: center;">
    <p>[NodeCG Test]</p>
    <select bind:value={mode} on:change={tn.dropdownUpdate}>
      <option value="opt1">Option 1</option>
      <option value="opt2">[select me] Option 2</option>
    </select>
  </div>
</div>
