<template>
  <div class="col offset-8">
    <h3>Total shoping</h3>
    <table class="table table-striped text-end table-responsive">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col"></th>
				</tr>
			</thead>
      <tbody>
        <tr>
          <th>Subtotal: </th>
          <td>Q. {{subtotal}}</td>
        </tr>
				<tr>
          <th>Total(IVA incluido): </th>
          <td>Q. {{total}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
	props : ['subtotal','total'],
  name: "componentTotal",
};
</script>

<style lang="scss" scoped></style>
