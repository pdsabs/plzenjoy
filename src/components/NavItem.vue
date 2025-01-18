<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 48px;
  height: 48px;
  color: var(--color-icon);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.1rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 39px);
    left: -10px;
    position: absolute;
    border-radius: 8px;
    width: 60px;
    height: 60px;
  }
}
</style>
