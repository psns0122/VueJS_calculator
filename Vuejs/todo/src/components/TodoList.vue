<script>
export default {
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    updateTodo(id) {
      this.$emit("update-todo", id);
    },
    editTodo(id) {
      this.$emit("edit-todo", id);
    },
    editTodo2({ id, msg }) {
      this.$emit("edit-todo-22", { id, msg });
    }
  },
};
</script>
<template>
  <div class="todo__list">
    <div
      v-for="item in computedTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.completed }"
    >
      <input
        type="checkbox"
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
        @click="updateTodo(item.id)"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>

      <span class="todo__item-text" v-if="item.text">{{ item.msg }}</span>
      <!-- v-model을 써야 실시간으로 item.msg 가 변경됨 -->
      <input type="text" v-model="item.msg" v-if="item.edit" />
      <button v-if="item.edit" @click="editTodo2({ id: item.id, msg: item.msg })">등록</button>

      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
        >delete</span>
      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="editTodo(item.id)"
        >edit</span>
    </div>
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할 일이 없습니다.</p>
    </div>
  </div>
</template>
