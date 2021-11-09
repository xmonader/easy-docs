<template>
  <nav class="sidenav">
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li><a @click="$router.push('/dashboard')">Dashboard</a></li>
        <li><a @click="$router.push('/customers')">Customers</a></li>
      </ul>
      <p class="menu-label">Administration</p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">Transactions</p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
  </nav>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.sidenav {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding: 15px;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid #e8e8e8;
  will-change: transform;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
  }
}
</style>
