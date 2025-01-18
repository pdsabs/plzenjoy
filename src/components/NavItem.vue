<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 2rem;
  color: var(--color-heading);
}

.details {
  flex: 1;
  margin-left: 1rem;
}

.item {
  display: flex;
  position: relative;
  margin-top: 0;
  padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
}

i {
  position: absolute;
  top: calc(50% - 24px);
  left: 30px;
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-icon);
}
</style>
