<script>
  let active, dropMode, dropdownVal;
  import { Mice }  from "../mice-draft";
  let mc = new Mice();
  const rep = nodecg.Replicant('dropdown');
  rep.on('change', (newVal) => {
    dropdownVal = newVal;
  });
  let dropdown = dropdownVal;
</script>
<div class="dropdown drop-{active} {dropMode}">
  <div class="float top">
    <p>{dropdown}</p>
  </div>
  <div class="float bottom">
    <p>{dropdown[0]}</p>
  </div>
</div>
