export default {
  menuList: '/menuList', // 菜单
  common: {
    queryCache: '/api/v1/commonServer/queryCache' // 查询缓存
  },
  userManage: {
    uniUserPage: '/api/v1/uniUserService/uniUserPage', // 用户列表查询服务$-s
    uniUserInfo: '/api/v1/uniUserService/uniUserInfo', // 查询用户详情信息$-s
    uaPositionList: '/api/v1/uniUserService/queryStaffUaPositionList', // 用户岗位信息查询服务
    updateUaAccountStatus: '/api/v1/uniUserService/updateUaAccountStatus', // 用户状态修改$-s
    uaDeputyAccountList: '/api/v1/uniUserService/uaDeputyAccountList', // 查询副账号信息$-s
    uaAccountResetPwd: '/api/v1/uniUserService/resetUaAccountPwd', // 重置密码$-s
    updateDeputyAccount: '/api/v1/uniUserService/updateDeputyAccount', // 副账号变更服务
    uaPositionListByDeputyAccount:
      '/api/v1/uniUserService/uaPositionListByDeputyAccount', // 副账号查询对应的岗位信息
    createDeputyAccount: '/api/v1/uniUserService/createDeputyAccount', // 创建副账号服务
    uaSubAccountPage: '/api/v1/uniUserService/uaSubAccountPage', // 查询从账号信息-s
    updateSubAccountStatus: '/api/v1/uniUserService/updateSubAccountStatus', // 查询从账号信息
    deleteSubAccount: '/api/v1/uniUserService/deleteSubAccount', // 删除从账号信息
    uaSubAccountForGrantPage: '/api/v1/uniUserService/uaSubAccountForGrantPage', // 从账户分页列表查询地址
    validateDeputyEmail: '/api/v1/deputyAccountServer/validateDeputyEmail', // 副账号邮箱验证
    validateDeputyPhoneNumber:
      '/api/v1/deputyAccountServer/validateDeputyPhoneNumber', // 副账号邮箱验证
    validateSubAccount: '/api/v1/uniUserService/validateSubAccount', // 从账号验证
    createSubAccount: '/api/v1/uniUserService/createSubAccount' // 从账号新增
  },
  orangeManage: {
    // uniuser_organizationServer_queryOrganizationList
    organizationInfo: '/api/v1/organizationServer/queryOrganizationList', // 组织树
    organizationDetails: '/api/v1/organizationServer/queryOrganizationInfo', // 组织详情
    organizationSearch: '/api/v1/organizationServer/queryOrganizationTreeList' // 组织树查询列表
  },
  roleManage: {
    queryRoleByCon: '/api/v1/roleManage/queryRoleByCon', // 角色查询服务
    queryRoleLevel: '/api/v1/roleManage/queryRoleLevel', // 角色等级查询服务
    addRole: '/api/v1/roleManage/addRole', // 角色新增服务
    modifyRole: '/api/v1/roleManage/modifyRole', // 角色修改服务
    verifyRoleName: '/api/v1/roleManage/verifyRoleName', // 根据主键查询角色信息
    removeAndInvalidRole: '/api/v1/roleManage/removeAndInvalidRole' // 角色删除、失效处理服务
  },
  roleGroupManage: {
    queryRoleGroupByCon: '/api/v1/roleGroupManage/queryRoleGroupByCon', // 角色组查询服务
    removeAndInvalidRoleGroup:
      '/api/v1/roleGroupManage/removeAndInvalidRoleGroup', // 角色组删除、失效处理服务
    addRoleGroup: '/api/v1/roleGroupManage/addRoleGroup', // 角色组新增服务
    modifyRoleGroup: '/api/v1/roleGroupManage/modifyRoleGroup', // 角色组修改服务
    verifyRoleGroupName: '/api/v1/roleGroupManage/verifyRoleGroupName', // 角色组名称唯一性校验服务
    queryRoleGroupById: '/api/v1/roleGroupManage/queryRoleGroupById', // 根据主键查询角色组详情信息服务
    queryRoleByNameAndSystemId: '/api/v1/roleGroupManage/queryRoleInfo', // 根据名称和系统ID查询角色信息
    busiSystemSelect: '/api/v1/roleManage/busiSystemSelect' // 所属系统查询
  },
  itSystemMagage: {
    systemList: '/api/v1/busiSysServer/queryBusiSysList', // IT系统分页查询
    updateSystem: '/api/v1/busiSysServer/updateBusiSys', // IT系统更新
    saveSystem: '/api/v1/busiSysServer/insertBusiSys', // IT系统新增保存
    deleteSystem: '/api/v1/busiSysServer/deleteBusiSys', // IT系统删除
    queryBusiSysByName: '/api/v1/busiSysServer/queryBusiSysByName' // IT系统查询
  },
  authManage: {
    queryAuthAbleGroupList: '/api/v1/roleAuth/queryAuthAbleGroupList', // 从账号可授权角色组查询
    queryGroupAuthList: '/api/v1/roleAuth/queryGroupAuthList', // 从账号已授权角色组查询服务
    createGroupAuth: '/api/v1/roleAuth/createGroupAuth', // 从账号角色组授权服务
    deleteGroupAuth: '/api/v1/roleAuth/deleteGroupAuth', // 从账号角色组回收服务
    queryAuthAbleList: '/api/v1/roleAuth/queryAuthAbleList', // 从账号可授权角色查询
    queryAuthList: '/api/v1/roleAuth/queryAuthList', // 从账号已授权查询服务
    createAuth: '/api/v1/roleAuth/createAuth', // 从账号角色授权服务
    deleteAuth: '/api/v1/roleAuth/deleteAuth', // 从账号角色回收服务
    commitAuth: '/api/v1/roleAuth/commitAuth', // 从账号角色授权回收服务
    isMultiRole: '/api/v1/roleAuth/isMultiRole' // 是否需要提示创建从账号
  }
}
