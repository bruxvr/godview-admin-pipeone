// Dados da aplicação baseados no JSON
const appData = {
  contas: [
    {
      id: 1,
      nome: "Cantina do Marcio",
      tipo: "Enterprise",
      status: "Active",
      contatos: 15420,
      mtmo: 3450,
      usuarios: 12,
      usuariosOnline: 8,
      conversasAbertas: 234,
      bulksRealizados: 45,
      bulkRestantes: "850/1000",
      mensagensEnviadas: 12450,
      subcontas: [
        {
          id: 11,
          nome: "Filial Centro",
          tipo: "Department",
          status: "Active",
          contatos: 5200,
          mtmo: 1200,
          usuarios: 8,
          usuariosOnline: 5,
          conversasAbertas: 89,
          bulksRealizados: 15,
          mensagensEnviadas: 4200,
          canais: {
            whatsapp: "conectado",
            instagram: "desconectado",
            messenger: "conectado",
            gmail: "conectado",
            telegram: "desconectado",
            api: "conectado",
          },
        },
        {
          id: 12,
          nome: "Filial Norte",
          tipo: "Department",
          status: "Active",
          contatos: 4800,
          mtmo: 980,
          usuarios: 6,
          usuariosOnline: 4,
          conversasAbertas: 67,
          bulksRealizados: 12,
          mensagensEnviadas: 3800,
          canais: {
            whatsapp: "conectado",
            instagram: "conectado",
            messenger: "desconectado",
            gmail: "conectado",
            telegram: "conectado",
            api: "desconectado",
          },
        },
      ],
      canais: {
        whatsapp: "conectado",
        instagram: "conectado",
        messenger: "desconectado",
        gmail: "conectado",
        telegram: "desconectado",
        api: "conectado",
      },
      // Configurações adicionais
      limiteDiario: "500",
      limiteContatos: "20000",
      limiteUsuarios: "25",
      plano: "premium",
      dataVencimento: "2025-08-15",
      valorMensal: "299.90",
      renovacaoAutomatica: true,
      timezone: "America/Sao_Paulo",
      idioma: "pt-BR",
      notificacoes: true,
      analytics: true,
      imagem: null,
      usuarios_detalhados: [
        {
          nome: "João Silva",
          email: "joao@cantina.com",
          cargo: "Admin",
          ultimoLogin: "2025-07-15 14:30",
          status: "online",
        },
        {
          nome: "Maria Santos",
          email: "maria@cantina.com",
          cargo: "Manager",
          ultimoLogin: "2025-07-15 13:45",
          status: "offline",
        },
      ],
    },
    {
      id: 2,
      nome: "Unidade Ingá",
      tipo: "Department",
      status: "Active",
      contatos: 2890,
      mtmo: 670,
      usuarios: 5,
      usuariosOnline: 3,
      conversasAbertas: 89,
      bulksRealizados: 12,
      bulkRestantes: "200/500",
      mensagensEnviadas: 2890,
      subcontas: [
        {
          id: 21,
          nome: "Equipe Vendas",
          tipo: "Team",
          status: "Active",
          contatos: 1200,
          mtmo: 300,
        },
      ],
      canais: {
        whatsapp: "conectado",
        instagram: "desconectado",
        messenger: "conectado",
        gmail: "conectado",
        telegram: "conectado",
        api: "desconectado",
      },
      usuarios_detalhados: [
        {
          nome: "Carlos Silva",
          email: "carlos@inga.com",
          cargo: "Manager",
          ultimoLogin: "2025-07-15 15:00",
          status: "online",
        },
        {
          nome: "Ana Costa",
          email: "ana@inga.com",
          cargo: "User",
          ultimoLogin: "2025-07-15 14:15",
          status: "offline",
        },
      ],
    },
    {
      id: 3,
      nome: "Boteco do Gabriel",
      tipo: "Enterprise",
      status: "Active",
      contatos: 9870,
      mtmo: 2340,
      usuarios: 8,
      usuariosOnline: 6,
      conversasAbertas: 156,
      bulksRealizados: 28,
      bulkRestantes: "450/750",
      mensagensEnviadas: 8760,
      subcontas: [],
      canais: {
        whatsapp: "conectado",
        instagram: "conectado",
        messenger: "conectado",
        gmail: "desconectado",
        telegram: "conectado",
        api: "conectado",
      },
      usuarios_detalhados: [
        {
          nome: "Gabriel Costa",
          email: "gabriel@boteco.com",
          cargo: "Admin",
          ultimoLogin: "2025-07-15 16:00",
          status: "online",
        },
        {
          nome: "Marcus Aguiar",
          email: "marcus@boteco.com",
          cargo: "Manager",
          ultimoLogin: "2025-07-15 15:15",
          status: "online",
        },
        {
          nome: "Sofia Pereira",
          email: "sofia@boteco.com",
          cargo: "Agent",
          ultimoLogin: "2025-07-15 14:30",
          status: "offline",
        },
      ],
    },
    {
      id: 4,
      nome: "Lojinha da Bruna",
      tipo: "Startup",
      status: "Trial",
      contatos: 2340,
      mtmo: 560,
      usuarios: 3,
      usuariosOnline: 2,
      conversasAbertas: 45,
      bulksRealizados: 8,
      bulkRestantes: "100/250",
      mensagensEnviadas: 1890,
      subcontas: [],
      canais: {
        whatsapp: "conectado",
        instagram: "desconectado",
        messenger: "desconectado",
        gmail: "conectado",
        telegram: "desconectado",
        api: "desconectado",
      },
      usuarios_detalhados: [
        {
          nome: "Bruna Silva",
          email: "bruna@lojinha.com",
          cargo: "Admin",
          ultimoLogin: "2025-07-15 15:30",
          status: "online",
        },
        {
          nome: "Pedro Santos",
          email: "pedro@lojinha.com",
          cargo: "Manager",
          ultimoLogin: "2025-07-15 14:45",
          status: "online",
        },
        {
          nome: "Ana Oliveira",
          email: "ana@lojinha.com",
          cargo: "Agent",
          ultimoLogin: "2025-07-14 18:20",
          status: "offline",
        },
      ],
    },
    {
      id: 5,
      nome: "Tech Solutions",
      tipo: "Enterprise",
      status: "Active",
      contatos: 12500,
      mtmo: 2890,
      usuarios: 15,
      usuariosOnline: 9,
      conversasAbertas: 198,
      bulksRealizados: 34,
      bulkRestantes: "600/1000",
      mensagensEnviadas: 11200,
      subcontas: [
        {
          id: 51,
          nome: "Suporte Técnico",
          tipo: "Department",
          status: "Active",
          contatos: 4200,
          mtmo: 980,
          usuarios: 6,
          usuariosOnline: 4,
          conversasAbertas: 89,
          bulksRealizados: 15,
          mensagensEnviadas: 4560,
          canais: {
            whatsapp: "conectado",
            instagram: "conectado",
            messenger: "conectado",
            gmail: "conectado",
            telegram: "desconectado",
            api: "conectado",
          },
        },
        {
          id: 52,
          nome: "Vendas Online",
          tipo: "Department",
          status: "Active",
          contatos: 3800,
          mtmo: 850,
          usuarios: 5,
          usuariosOnline: 3,
          conversasAbertas: 67,
          bulksRealizados: 12,
          mensagensEnviadas: 3890,
          canais: {
            whatsapp: "conectado",
            instagram: "conectado",
            messenger: "desconectado",
            gmail: "conectado",
            telegram: "conectado",
            api: "conectado",
          },
        },
        {
          id: 53,
          nome: "Marketing Digital",
          tipo: "Department",
          status: "Active",
          contatos: 4500,
          mtmo: 1060,
          usuarios: 4,
          usuariosOnline: 2,
          conversasAbertas: 42,
          bulksRealizados: 7,
          mensagensEnviadas: 2750,
          canais: {
            whatsapp: "conectado",
            instagram: "conectado",
            messenger: "conectado",
            gmail: "desconectado",
            telegram: "conectado",
            api: "conectado",
          },
        },
      ],
      canais: {
        whatsapp: "conectado",
        instagram: "conectado",
        messenger: "conectado",
        gmail: "conectado",
        telegram: "conectado",
        api: "conectado",
      },
      usuarios_detalhados: [
        {
          nome: "Pedro Tech",
          email: "pedro@tech.com",
          cargo: "Admin",
          ultimoLogin: "2025-07-15 16:15",
          status: "online",
        },
        {
          nome: "Lisa Code",
          email: "lisa@tech.com",
          cargo: "Manager",
          ultimoLogin: "2025-07-15 15:45",
          status: "online",
        },
        {
          nome: "Carlos Dev",
          email: "carlos@tech.com",
          cargo: "Agent",
          ultimoLogin: "2025-07-15 13:20",
          status: "offline",
        },
        {
          nome: "Maria Designer",
          email: "maria@tech.com",
          cargo: "Manager",
          ultimoLogin: "2025-07-15 16:00",
          status: "online",
        },
      ],
    },
  ],
  metricas: {
    totalContas: { valor: 10, variacao: "+2%" },
    errosDoMes: { valor: 120, variacao: "-5%" },
    mtmoTotal: { valor: "12.3K", variacao: "+10%" },
    canaisAtivos: { valor: 22, variacao: "0%" },
  },
  errosDiarios: [
    { data: "2025-07-01", mt: 12, mo: 8 },
    { data: "2025-07-02", mt: 15, mo: 6 },
    { data: "2025-07-03", mt: 8, mo: 12 },
    { data: "2025-07-04", mt: 18, mo: 9 },
    { data: "2025-07-05", mt: 14, mo: 7 },
    { data: "2025-07-06", mt: 10, mo: 11 },
    { data: "2025-07-07", mt: 16, mo: 5 },
  ],
  canaisDistribuicao: [
    { canal: "WhatsApp", contas: 8 },
    { canal: "SMS", contas: 5 },
    { canal: "Email", contas: 7 },
    { canal: "Push", contas: 3 },
    { canal: "Telegram", contas: 4 },
  ],
  errosApi: [
    {
      endpoint: "/api/messages",
      tipo: "timeout",
      status: "warning",
      quantidade: 12,
      ultimoErro: "2025-07-15 15:30",
    },
    {
      endpoint: "/api/auth",
      tipo: "payload",
      status: "critical",
      quantidade: 5,
      ultimoErro: "2025-07-15 14:20",
    },
    {
      endpoint: "/api/users",
      tipo: "autenticacao",
      status: "normal",
      quantidade: 2,
      ultimoErro: "2025-07-15 12:10",
    },
  ],
  logs: [
    {
      timestamp: "2025-07-15 15:45",
      tipo: "incoming",
      canal: "WhatsApp",
      clienteId: "CLT001",
      conta: "Cantina do Marcio",
      mensagem: "Olá, gostaria de fazer um pedido",
    },
    {
      timestamp: "2025-07-15 15:44",
      tipo: "outgoing",
      canal: "WhatsApp",
      clienteId: "CLT001",
      conta: "Cantina do Marcio",
      mensagem: "Oi! Como posso ajudar?",
    },
    {
      timestamp: "2025-07-15 15:43",
      tipo: "incoming",
      canal: "Instagram",
      clienteId: "CLT002",
      conta: "Lojinha da Bruna",
      mensagem: "Produto disponível?",
    },
  ],
  atividades: [
    {
      timestamp: "2025-07-17 10:30",
      tipo: "sistema",
      descricao: "Sistema atualizado para versão 2.1.0",
      conta: "Sistema",
    },
    {
      timestamp: "2025-07-17 09:15",
      tipo: "bulk",
      descricao: "Bulk de 1.200 mensagens realizado com sucesso",
      conta: "Cantina do Marcio",
    },
    {
      timestamp: "2025-07-17 08:45",
      tipo: "login",
      descricao: "Usuário Maria Santos fez login",
      conta: "Tech Solutions",
    },
    {
      timestamp: "2025-07-16 17:30",
      tipo: "integracao",
      descricao: "Instagram conectado com sucesso",
      conta: "Restaurante Saboroso",
    },
    {
      timestamp: "2025-07-15 16:00",
      tipo: "login",
      descricao: "Usuário João Silva fez login",
      conta: "Cantina do Marcio",
    },
    {
      timestamp: "2025-07-15 15:30",
      tipo: "bulk",
      descricao: "Bulk de 500 mensagens realizado",
      conta: "Tech Solutions",
    },
    {
      timestamp: "2025-07-15 14:45",
      tipo: "integracao",
      descricao: "WhatsApp integrado com sucesso",
      conta: "Unidade Ingá",
    },
  ],
};

// Estado global da aplicação
let appState = {
  currentPage: "dashboard",
  selectedAccount: null,
  selectedSubaccount: null,
  mode: "admin",
  theme: "light",
  period: "1_mes",
  sidebarOpen: false,
  expandedNodes: new Set(),
  currentPageNum: 1,
  itemsPerPage: 10,
  editingUser: null,
  editingAccount: null,
  filters: {
    searchTerm: "",
    type: "",
    status: "",
    errorType: "",
    errorStatus: "",
    logType: "",
    logChannel: "",
    logSearchId: "",
    logDate: "",
  },
  sortBy: "nome",
  sortDirection: "asc",
  charts: {
    errorsChart: null,
    channelsChart: null,
  },
};

// Utilitários
const utils = {
  formatNumber(num) {
    if (typeof num === "string") return num;
    return new Intl.NumberFormat("pt-BR").format(num);
  },

  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  },

  formatTime(dateString) {
    return new Date(dateString).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  },

  formatDateTime(dateString) {
    return new Date(dateString).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  },

  getTypeIcon(type) {
    const icons = {
      Enterprise: "fa-building",
      Department: "fa-layer-group",
      Team: "fa-users",
      Startup: "fa-rocket",
      Individual: "fa-user",
    };
    return icons[type] || "fa-circle";
  },

  getChannelIcon(channel) {
    const icons = {
      whatsapp: "fab fa-whatsapp",
      instagram: "fab fa-instagram",
      messenger: "fab fa-facebook-messenger",
      gmail: "fas fa-envelope",
      telegram: "fab fa-telegram",
      api: "fas fa-code",
    };
    return icons[channel] || "fa-plug";
  },

  getChannelName(channel) {
    const names = {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      messenger: "Messenger",
      gmail: "Gmail",
      telegram: "Telegram",
      api: "API",
    };
    return names[channel] || channel;
  },

  flattenAccounts(accounts) {
    let flattened = [];
    function flatten(accs) {
      for (let acc of accs) {
        flattened.push(acc);
        if (acc.subcontas && acc.subcontas.length > 0) {
          flatten(acc.subcontas.map((sub) => ({ ...sub, parentId: acc.id })));
        }
      }
    }
    flatten(accounts);
    return flattened;
  },

  findAccountById(accounts, id) {
    function find(accs) {
      for (let acc of accs) {
        if (acc.id === id) return acc;
        if (acc.subcontas && acc.subcontas.length > 0) {
          const found = find(acc.subcontas);
          if (found) return found;
        }
      }
      return null;
    }
    return find(accounts);
  },

  exportToCSV(data, filename) {
    const csvContent = data
      .map((row) =>
        Object.values(row)
          .map((val) =>
            typeof val === "string" && val.includes(",") ? `"${val}"` : val
          )
          .join(",")
      )
      .join("\n");

    const header = Object.keys(data[0]).join(",");
    const fullContent = header + "\n" + csvContent;

    const blob = new Blob([fullContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  },

  showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 90px;
      right: 20px;
      background: var(--color-${
        type === "success" ? "success" : type === "error" ? "error" : "info"
      });
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      z-index: 3000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateX(0)";
    }, 10);

    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  },

  openModal(modalId) {
    const overlay = document.getElementById("modalOverlay");
    const targetModal = document.getElementById(modalId);

    // Esconder todos os modais
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.classList.add("hidden");
    });

    // Mostrar o modal desejado
    targetModal.classList.remove("hidden");
    overlay.classList.add("active");
  },

  closeModal() {
    const overlay = document.getElementById("modalOverlay");
    overlay.classList.remove("active");

    // Resetar formulários
    document.getElementById("createUserForm").reset();
    document.getElementById("createSubaccountForm").reset();

    // Resetar formulários dos novos modais
    const inviteForm = document.getElementById("inviteUserForm");
    const editForm = document.getElementById("editUserForm");
    const settingsForm = document.getElementById("accountSettingsForm");
    if (inviteForm) inviteForm.reset();
    if (editForm) editForm.reset();
    if (settingsForm) settingsForm.reset();

    // Limpar estado de edição
    appState.editingUser = null;
    appState.editingAccount = null;
  },
};

// Componentes
const components = {
  renderAccountTree(accounts, parentElement, level = 0) {
    parentElement.innerHTML = "";

    accounts.forEach((account) => {
      const nodeDiv = document.createElement("div");
      nodeDiv.className = "tree-node";

      const itemDiv = document.createElement("div");
      itemDiv.className = `tree-item ${
        appState.selectedAccount?.id === account.id ? "active" : ""
      }`;
      itemDiv.style.paddingLeft = `${level * 20 + 12}px`;

      const hasChildren = account.subcontas && account.subcontas.length > 0;
      const isExpanded = appState.expandedNodes.has(account.id);

      itemDiv.innerHTML = `
        ${
          hasChildren
            ? `<button class="tree-toggle" data-id="${account.id}">
          <i class="fas fa-chevron-${isExpanded ? "down" : "right"}"></i>
        </button>`
            : '<span style="width: 24px; display: inline-block;"></span>'
        }
        <i class="fas ${utils.getTypeIcon(account.tipo)} tree-icon"></i>
        <span class="tree-label">${account.nome}</span>
        <span class="status status--${
          account.status === "Active" ? "success" : "error"
        }">
          ${account.status === "Active" ? "ATIVO" : "INATIVO"}
        </span>
      `;

      itemDiv.addEventListener("click", (e) => {
        if (
          !e.target.classList.contains("tree-toggle") &&
          !e.target.closest(".tree-toggle")
        ) {
          e.preventDefault();
          e.stopPropagation();
          this.selectAccount(account);
        }
      });

      if (hasChildren) {
        const toggleBtn = itemDiv.querySelector(".tree-toggle");
        toggleBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleNode(account.id);
        });
      }

      nodeDiv.appendChild(itemDiv);

      if (hasChildren && isExpanded) {
        const childrenDiv = document.createElement("div");
        childrenDiv.className = "tree-children";
        this.renderAccountTree(account.subcontas, childrenDiv, level + 1);
        nodeDiv.appendChild(childrenDiv);
      }

      parentElement.appendChild(nodeDiv);
    });
  },

  selectAccount(account) {
    appState.selectedAccount = account;
    appState.selectedSubaccount = null;
    appState.currentPage = "accountDetail";
    this.updateUI();
  },

  selectSubaccount(subaccount) {
    appState.selectedSubaccount = subaccount;
    appState.currentPage = "subaccountDetail";
    this.updateUI();
  },

  openUsersManagementModal(companyId) {
    const company = utils.findAccountById(appData.contas, companyId);
    if (!company) {
      console.error("Empresa não encontrada:", companyId);
      return;
    }

    // Atualizar o título do modal
    const companyNameHeader = document.getElementById("companyNameHeader");
    if (companyNameHeader) {
      companyNameHeader.textContent = company.nome;
    }

    // Renderizar a lista de usuários
    this.renderUsersManagementTable(company);

    // Abrir o modal
    utils.openModal("manageUsersModal");
  },

  renderUsersManagementTable(company) {
    const tbody = document.getElementById("manageUsersTableBody");
    if (!tbody) {
      console.error("Elemento manageUsersTableBody não encontrado");
      return;
    }

    tbody.innerHTML = "";

    if (
      !company.usuarios_detalhados ||
      company.usuarios_detalhados.length === 0
    ) {
      const emptyRow = document.createElement("tr");
      emptyRow.innerHTML = `
        <td colspan="6" style="text-align: center; color: var(--color-text-secondary); padding: var(--space-24);">
          Nenhum usuário encontrado
        </td>
      `;
      tbody.appendChild(emptyRow);
      return;
    }

    company.usuarios_detalhados.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>
          <span class="status status--${user.cargo.toLowerCase()}">
            ${user.cargo}
          </span>
        </td>
        <td>
          <div class="user-status user-status--${user.status}">
            <span class="user-status-indicator"></span>
            ${user.status === "online" ? "Online" : "Offline"}
          </div>
        </td>
        <td>${utils.formatDate(user.ultimoLogin)}</td>
        <td>
          <div class="user-actions">
            <button class="btn btn--sm btn--primary user-edit-btn" 
                    data-user-index="${index}" 
                    data-company-id="${company.id}" 
                    title="Editar usuário">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn--sm user-delete-btn" 
                    data-user-index="${index}" 
                    data-company-id="${company.id}" 
                    title="Excluir usuário">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      `;

      // Adicionar event listeners para os botões de ação
      const editBtn = row.querySelector(".user-edit-btn");
      const deleteBtn = row.querySelector(".user-delete-btn");

      if (editBtn) {
        editBtn.addEventListener("click", () => {
          this.openEditUserModal(company.id, index);
        });
      }

      if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
          this.deleteUser(company.id, index);
        });
      }

      tbody.appendChild(row);
    });
  },

  openEditUserModal(companyId, userIndex) {
    const company = utils.findAccountById(appData.contas, companyId);
    if (!company || !company.usuarios_detalhados[userIndex]) {
      console.error("Usuário não encontrado");
      return;
    }

    const user = company.usuarios_detalhados[userIndex];

    // Preencher o formulário
    document.getElementById("editUserName").value = user.nome;
    document.getElementById("editUserEmail").value = user.email;
    document.getElementById("editUserRole").value = user.cargo.toLowerCase();

    // Armazenar dados para edição
    appState.editingUser = { companyId, userIndex };

    // Abrir modal
    utils.openModal("editUserModal");
  },

  deleteUser(companyId, userIndex) {
    const company = utils.findAccountById(appData.contas, companyId);
    if (!company || !company.usuarios_detalhados[userIndex]) {
      console.error("Usuário não encontrado");
      return;
    }

    const user = company.usuarios_detalhados[userIndex];

    if (confirm(`Tem certeza que deseja excluir o usuário "${user.nome}"?`)) {
      // Remover usuário do array
      company.usuarios_detalhados.splice(userIndex, 1);

      // Atualizar contadores
      if (company.usuarios > 0) {
        company.usuarios--;
      }
      if (user.status === "online" && company.usuariosOnline > 0) {
        company.usuariosOnline--;
      }

      // Renderizar novamente a tabela
      this.renderUsersManagementTable(company);

      // Atualizar a tabela principal de empresas
      this.renderCompaniesTable();

      utils.showNotification("Usuário excluído com sucesso!", "success");
    }
  },

  inviteUser(companyId, email, role) {
    const company = utils.findAccountById(appData.contas, companyId);
    if (!company) {
      console.error("Empresa não encontrada");
      return;
    }

    // Verificar se o email já existe
    const emailExists = company.usuarios_detalhados?.some(
      (user) => user.email === email
    );
    if (emailExists) {
      utils.showNotification("Este email já está cadastrado!", "error");
      return;
    }

    // Criar novo usuário
    const newUser = {
      nome: email.split("@")[0], // Nome temporário baseado no email
      email: email,
      cargo: role.charAt(0).toUpperCase() + role.slice(1),
      ultimoLogin: new Date().toISOString(),
      status: "offline",
    };

    // Inicializar array se não existir
    if (!company.usuarios_detalhados) {
      company.usuarios_detalhados = [];
    }

    // Adicionar usuário
    company.usuarios_detalhados.push(newUser);

    // Atualizar contadores
    company.usuarios = (company.usuarios || 0) + 1;

    // Renderizar novamente a tabela
    this.renderUsersManagementTable(company);

    // Atualizar a tabela principal de empresas
    this.renderCompaniesTable();

    utils.showNotification("Usuário convidado com sucesso!", "success");
  },

  saveUserEdit() {
    if (!appState.editingUser) {
      console.error("Nenhum usuário sendo editado");
      return;
    }

    const { companyId, userIndex } = appState.editingUser;
    const company = utils.findAccountById(appData.contas, companyId);

    if (!company || !company.usuarios_detalhados[userIndex]) {
      console.error("Usuário não encontrado para edição");
      return;
    }

    const newRole = document.getElementById("editUserRole").value;
    const roleCapitalized = newRole.charAt(0).toUpperCase() + newRole.slice(1);

    // Atualizar o cargo do usuário
    company.usuarios_detalhados[userIndex].cargo = roleCapitalized;

    // Fechar modal e limpar estado
    utils.closeModal();
    appState.editingUser = null;

    // Renderizar novamente a tabela
    this.renderUsersManagementTable(company);

    utils.showNotification("Usuário atualizado com sucesso!", "success");
  },

  openAccountSettingsModal(companyId) {
    const company = utils.findAccountById(appData.contas, companyId);
    if (!company) {
      console.error("Empresa não encontrada:", companyId);
      return;
    }

    // Atualizar o título do modal
    const accountSettingsTitle = document.getElementById(
      "accountSettingsTitle"
    );
    if (accountSettingsTitle) {
      accountSettingsTitle.textContent = company.nome;
    }

    // Preencher o formulário com os dados da empresa
    this.populateAccountSettings(company);

    // Armazenar dados para edição
    appState.editingAccount = { companyId };

    // Abrir o modal
    utils.openModal("accountSettingsModal");
  },

  populateAccountSettings(company) {
    // Informações básicas
    document.getElementById("settingsAccountName").value = company.nome || "";
    document.getElementById("settingsAccountType").value =
      company.tipo || "Enterprise";
    document.getElementById("settingsAccountStatus").value =
      company.status || "Active";
    document.getElementById("settingsAccountId").value = company.id || "";

    // Limites de mensagens (usar valores padrão se não existirem)
    const bulkRemaining = company.bulkRestantes || "1000/1000";
    const [used, total] = bulkRemaining.split("/");
    document.getElementById("settingsBulkLimit").value = total || "1000";
    document.getElementById("settingsDailyLimit").value =
      company.limiteDiario || "500";
    document.getElementById("settingsContactLimit").value =
      company.limiteContatos || "10000";
    document.getElementById("settingsUserLimit").value =
      company.limiteUsuarios || "50";

    // Informações de cobrança (usar valores padrão)
    document.getElementById("settingsPlan").value = this.getAccountPlan(
      company.tipo
    );
    document.getElementById("settingsBillingDate").value =
      company.dataVencimento || this.getNextBillingDate();
    document.getElementById("settingsMonthlyValue").value =
      company.valorMensal || this.getDefaultPlanValue(company.tipo);
    document.getElementById("settingsAutoRenewal").checked =
      company.renovacaoAutomatica !== false;

    // Configurações adicionais
    document.getElementById("settingsTimezone").value =
      company.timezone || "America/Sao_Paulo";
    document.getElementById("settingsLanguage").value =
      company.idioma || "pt-BR";
    document.getElementById("settingsNotifications").checked =
      company.notificacoes !== false;
    document.getElementById("settingsAnalytics").checked =
      company.analytics !== false;

    // Imagem da conta
    const accountImage = document.getElementById("currentAccountImage");
    if (company.imagem) {
      accountImage.src = company.imagem;
    } else {
      accountImage.src = `https://via.placeholder.com/100x100/21808D/FFFFFF?text=${company.nome.charAt(
        0
      )}`;
    }
  },

  getAccountPlan(tipo) {
    const planMapping = {
      Individual: "basic",
      Startup: "standard",
      Department: "standard",
      Team: "standard",
      Enterprise: "premium",
    };
    return planMapping[tipo] || "standard";
  },

  getDefaultPlanValue(tipo) {
    const valueMapping = {
      Individual: "29.90",
      Startup: "99.90",
      Department: "199.90",
      Team: "149.90",
      Enterprise: "499.90",
    };
    return valueMapping[tipo] || "99.90";
  },

  getNextBillingDate() {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().split("T")[0];
  },

  saveAccountSettings() {
    if (!appState.editingAccount) {
      console.error("Nenhuma conta sendo editada");
      return;
    }

    const { companyId } = appState.editingAccount;
    const company = utils.findAccountById(appData.contas, companyId);

    if (!company) {
      console.error("Empresa não encontrada para edição");
      return;
    }

    // Atualizar informações básicas
    company.nome = document.getElementById("settingsAccountName").value;
    company.tipo = document.getElementById("settingsAccountType").value;
    company.status = document.getElementById("settingsAccountStatus").value;

    // Atualizar limites
    const bulkLimit = document.getElementById("settingsBulkLimit").value;
    const [currentUsed] = (company.bulkRestantes || "0/1000").split("/");
    company.bulkRestantes = `${currentUsed}/${bulkLimit}`;
    company.limiteDiario = document.getElementById("settingsDailyLimit").value;
    company.limiteContatos = document.getElementById(
      "settingsContactLimit"
    ).value;
    company.limiteUsuarios = document.getElementById("settingsUserLimit").value;

    // Atualizar informações de cobrança
    company.plano = document.getElementById("settingsPlan").value;
    company.dataVencimento = document.getElementById(
      "settingsBillingDate"
    ).value;
    company.valorMensal = document.getElementById("settingsMonthlyValue").value;
    company.renovacaoAutomatica = document.getElementById(
      "settingsAutoRenewal"
    ).checked;

    // Atualizar configurações adicionais
    company.timezone = document.getElementById("settingsTimezone").value;
    company.idioma = document.getElementById("settingsLanguage").value;
    company.notificacoes = document.getElementById(
      "settingsNotifications"
    ).checked;
    company.analytics = document.getElementById("settingsAnalytics").checked;

    // Fechar modal e limpar estado
    utils.closeModal();
    appState.editingAccount = null;

    // Renderizar novamente a tabela principal
    this.renderCompaniesTable();

    utils.showNotification(
      "Configurações da conta atualizadas com sucesso!",
      "success"
    );
  },

  handleImageUpload() {
    const input = document.getElementById("accountImageInput");
    const file = input.files[0];

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        utils.showNotification("Imagem muito grande. Máximo 2MB.", "error");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const accountImage = document.getElementById("currentAccountImage");
        accountImage.src = e.target.result;

        // Salvar na empresa se estiver editando
        if (appState.editingAccount) {
          const { companyId } = appState.editingAccount;
          const company = utils.findAccountById(appData.contas, companyId);
          if (company) {
            company.imagem = e.target.result;
          }
        }
      };
      reader.readAsDataURL(file);
    }
  },

  removeAccountImage() {
    const accountImage = document.getElementById("currentAccountImage");

    if (appState.editingAccount) {
      const { companyId } = appState.editingAccount;
      const company = utils.findAccountById(appData.contas, companyId);
      if (company) {
        accountImage.src = `https://via.placeholder.com/100x100/21808D/FFFFFF?text=${company.nome.charAt(
          0
        )}`;
        company.imagem = null;
      }
    }
  },

  toggleNode(accountId) {
    if (appState.expandedNodes.has(accountId)) {
      appState.expandedNodes.delete(accountId);
    } else {
      appState.expandedNodes.add(accountId);
    }
    this.renderSidebar();
  },

  renderSidebar() {
    const accountsTree = document.getElementById("accountsTree");
    if (!accountsTree) {
      console.error("Elemento accountsTree não encontrado");
      return;
    }

    let filteredAccounts = appData.contas;

    if (appState.filters.searchTerm) {
      filteredAccounts = this.filterAccountsBySearch(
        appData.contas,
        appState.filters.searchTerm
      );
    }

    this.renderAccountTree(filteredAccounts, accountsTree);
  },

  filterAccountsBySearch(accounts, searchTerm) {
    const filtered = [];

    function filterRecursive(accs) {
      for (let acc of accs) {
        if (acc.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
          filtered.push(acc);
        } else if (acc.subcontas && acc.subcontas.length > 0) {
          filterRecursive(acc.subcontas);
        }
      }
    }

    filterRecursive(accounts);
    return filtered;
  },

  renderMetrics() {
    const metrics = appData.metricas;

    // Verificar se os elementos existem antes de tentar modificá-los
    const metricElements = [
      {
        id: "metricContas",
        value: metrics.totalContas.valor,
        change: "metricContasChange",
        changeValue: metrics.totalContas.variacao,
      },
      {
        id: "metricErros",
        value: metrics.errosDoMes.valor,
        change: "metricErrosChange",
        changeValue: metrics.errosDoMes.variacao,
      },
      {
        id: "metricMtmo",
        value: metrics.mtmoTotal.valor,
        change: "metricMtmoChange",
        changeValue: metrics.mtmoTotal.variacao,
      },
      {
        id: "metricCanais",
        value: metrics.canaisAtivos.valor,
        change: "metricCanaisChange",
        changeValue: metrics.canaisAtivos.variacao,
      },
    ];

    metricElements.forEach((metric) => {
      const element = document.getElementById(metric.id);
      const changeElement = document.getElementById(metric.change);

      if (element) {
        element.textContent = metric.value;
      } else {
        console.warn(`Elemento ${metric.id} não encontrado`);
      }

      if (changeElement) {
        changeElement.textContent = metric.changeValue;
        changeElement.className = `metric-change ${
          metric.changeValue.includes("+")
            ? "positive"
            : metric.changeValue.includes("-")
            ? "negative"
            : "neutral"
        }`;
      } else {
        console.warn(`Elemento ${metric.change} não encontrado`);
      }
    });
  },

  renderCharts() {
    // Aguardar um pouco para garantir que os elementos estão no DOM
    setTimeout(() => {
      this.renderErrorsChart();
      this.renderChannelsChart();
      this.populateCompanyFilter();
    }, 100);
  },

  renderErrorsChart() {
    const canvas = document.getElementById("errorsChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const data = appData.errosDiarios;

    // Destruir gráfico existente se houver
    if (appState.charts.errorsChart) {
      appState.charts.errorsChart.destroy();
    }

    appState.charts.errorsChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((d) => utils.formatDate(d.data)),
        datasets: [
          {
            label: "Erros MT",
            data: data.map((d) => d.mt),
            borderColor: "#1FB8CD",
            backgroundColor: "rgba(31, 184, 205, 0.1)",
            tension: 0.4,
            fill: true,
          },
          {
            label: "Erros MO",
            data: data.map((d) => d.mo),
            borderColor: "#FFC185",
            backgroundColor: "rgba(255, 193, 133, 0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },

  renderChannelsChart() {
    const canvas = document.getElementById("channelsChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const data = appData.canaisDistribuicao;

    // Destruir gráfico existente se houver
    if (appState.charts.channelsChart) {
      appState.charts.channelsChart.destroy();
    }

    appState.charts.channelsChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.map((d) => d.canal),
        datasets: [
          {
            data: data.map((d) => d.contas),
            backgroundColor: [
              "#1FB8CD",
              "#FFC185",
              "#B4413C",
              "#ECEBD5",
              "#5D878F",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });
  },

  populateCompanyFilter() {
    const filter = document.getElementById("chartCompanyFilter");
    if (!filter) return;

    filter.innerHTML = '<option value="">Todas as empresas</option>';

    appData.contas.forEach((conta) => {
      const option = document.createElement("option");
      option.value = conta.id;
      option.textContent = conta.nome;
      filter.appendChild(option);
    });
  },

  renderRankingTable() {
    const tbody = document.getElementById("rankingTableBody");
    if (!tbody) {
      console.error("Elemento rankingTableBody não encontrado");
      return;
    }

    let accounts = utils.flattenAccounts(appData.contas);

    // Aplicar filtros
    if (appState.filters.searchTerm) {
      accounts = accounts.filter((acc) =>
        acc.nome
          .toLowerCase()
          .includes(appState.filters.searchTerm.toLowerCase())
      );
    }

    if (appState.filters.type) {
      accounts = accounts.filter((acc) => acc.tipo === appState.filters.type);
    }

    if (appState.filters.status) {
      accounts = accounts.filter(
        (acc) => acc.status === appState.filters.status
      );
    }

    // Ordenar
    accounts.sort((a, b) => {
      let aVal = a[appState.sortBy];
      let bVal = b[appState.sortBy];

      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (appState.sortDirection === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    // Paginação
    const startIndex = (appState.currentPageNum - 1) * appState.itemsPerPage;
    const endIndex = startIndex + appState.itemsPerPage;
    const paginatedAccounts = accounts.slice(startIndex, endIndex);

    tbody.innerHTML = "";

    paginatedAccounts.forEach((account) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <div class="flex items-center gap-8">
            <i class="fas ${utils.getTypeIcon(account.tipo)}"></i>
            <span>${account.nome}</span>
          </div>
        </td>
        <td>
          <span class="type-badge">
            <i class="fas ${utils.getTypeIcon(account.tipo)}"></i>
            ${account.tipo}
          </span>
        </td>
        <td>
          <span class="status status--${
            account.status === "Active"
              ? "success"
              : account.status === "Trial"
              ? "warning"
              : "error"
          }">
            ${account.status}
          </span>
        </td>
        <td>${utils.formatNumber(account.contatos)}</td>
        <td>${utils.formatNumber(account.mtmo)}</td>
        <td>
          <div class="action-buttons">
            <button class="btn btn--sm btn--primary action-btn" data-account-id="${
              account.id
            }">
              <i class="fas fa-eye"></i> Detalhes
            </button>
            <button class="btn btn--sm btn--secondary action-btn">
              <i class="fas fa-users"></i> Usuários
            </button>
          </div>
        </td>
      `;

      const detailsBtn = row.querySelector("[data-account-id]");
      detailsBtn.addEventListener("click", () => {
        const accountToSelect = utils.findAccountById(
          appData.contas,
          account.id
        );
        if (accountToSelect) {
          this.selectAccount(accountToSelect);
        }
      });

      tbody.appendChild(row);
    });

    this.renderPagination(accounts.length, "rankingPagination");
  },

  renderCompaniesTable() {
    const tbody = document.getElementById("companiesTableBody");
    if (!tbody) {
      console.error("Elemento companiesTableBody não encontrado");
      return;
    }

    let companies = [...appData.contas];

    // Aplicar filtros
    if (appState.filters.searchTerm) {
      companies = companies.filter(
        (company) =>
          company.nome
            .toLowerCase()
            .includes(appState.filters.searchTerm.toLowerCase()) ||
          (company.subcontas &&
            company.subcontas.some((sub) =>
              sub.nome
                .toLowerCase()
                .includes(appState.filters.searchTerm.toLowerCase())
            ))
      );
    }

    if (appState.filters.status) {
      companies = companies.filter((company) => {
        const status = company.status === "Active" ? "ATIVO" : "INATIVO";
        return status === appState.filters.status;
      });
    }

    tbody.innerHTML = "";

    companies.forEach((company) => {
      // Renderizar empresa principal
      this.renderCompanyRow(tbody, company, 0);

      // Renderizar subcontas se existirem e se a empresa estiver expandida
      if (company.subcontas && company.subcontas.length > 0) {
        const isExpanded = appState.expandedNodes.has(company.id);
        if (isExpanded) {
          company.subcontas.forEach((subaccount) => {
            this.renderCompanyRow(tbody, subaccount, 1, company.id);
          });
        }
      }
    });

    this.renderPagination(companies.length, "companiesPagination");
  },

  renderCompanyRow(tbody, account, level = 0, parentId = null) {
    const row = document.createElement("tr");
    row.className = level > 0 ? "subaccount-row" : "company-row";
    row.setAttribute("data-level", level);

    // Gerar ícones de canais com status de integração
    const channelIcons = account.canais
      ? Object.entries(account.canais)
          .map(([channel, status]) => {
            const isIntegrated = status === "conectado";
            const integrationClass = isIntegrated
              ? "integrated"
              : "not-integrated";
            return `<div class="channel-icon ${channel} ${integrationClass}" 
                          title="${utils.getChannelName(channel)} - ${
              isIntegrated ? "Integrado" : "Clique para integrar"
            }"
                          data-channel="${channel}"
                          data-company-id="${account.id}"
                          data-integrated="${isIntegrated}">
                      <i class="${utils.getChannelIcon(channel)}"></i>
                    </div>`;
          })
          .join("")
      : "";

    // Determinar se tem subcontas (apenas para empresas principais)
    const hasSubaccounts =
      level === 0 && account.subcontas && account.subcontas.length > 0;
    const isExpanded = hasSubaccounts && appState.expandedNodes.has(account.id);

    // Calcular indentação
    const indentStyle = `padding-left: ${level * 30 + 12}px`;

    row.innerHTML = `
      <td>
        <input type="checkbox" class="company-checkbox" data-company-id="${
          account.id
        }" />
      </td>
      <td>
        <div class="company-name-cell" style="${indentStyle}">
          ${
            hasSubaccounts
              ? `<button class="tree-toggle" data-company-id="${account.id}">
               <i class="fas fa-chevron-${isExpanded ? "down" : "right"}"></i>
             </button>`
              : '<span class="tree-spacer"></span>'
          }
          <i class="fas ${utils.getTypeIcon(account.tipo)} company-icon"></i>
          <span class="company-name">${account.nome}</span>
          ${level > 0 ? '<span class="subaccount-badge">Subconta</span>' : ""}
        </div>
      </td>
      <td><code>${account.id || `SUB${account.id}`}</code></td>
      <td>
        <span class="status status--${
          account.status === "Active" ? "success" : "error"
        }">
          ${account.status === "Active" ? "ATIVO" : "INATIVO"}
        </span>
      </td>
      <td>${account.usuarios || account.usuariosOnline || "-"}</td>
      <td>
        <div class="channel-icons">
          ${channelIcons}
        </div>
      </td>
      <td>
        <div class="activity-info">
          <div class="activity-stats">
            <div class="activity-item">
              <i class="fas fa-comments"></i>
              <span>${account.conversasAbertas || 0} conversas</span>
            </div>
            <div class="activity-item">
              <i class="fas fa-paper-plane"></i>
              <span>${account.bulksRealizados || 0} bulks</span>
            </div>
            <div class="activity-item">
              <i class="fas fa-envelope"></i>
              <span>${utils.formatNumber(
                account.mensagensEnviadas || account.mtmo || 0
              )} msgs</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div class="action-buttons">
          <button class="btn btn--sm btn--primary action-btn" data-company-id="${
            account.id
          }" data-level="${level}" title="Ver detalhes">
            <i class="fas fa-eye"></i>
          </button>
          <button class="btn btn--sm btn--info users-manager-btn" data-company-id="${
            account.id
          }" title="Gerenciar usuários">
            <i class="fas fa-users"></i>
          </button>
          <button class="btn btn--sm btn--secondary action-btn" title="Configurações">
            <i class="fas fa-cog"></i>
          </button>
          <button class="btn btn--sm btn--outline action-btn" title="Mais opções">
            <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </td>
    `;

    // Adicionar event listeners
    const toggleBtn = row.querySelector(".tree-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleCompanyNode(account.id);
      });
    }

    const detailsBtn = row.querySelector("[data-company-id]");
    if (detailsBtn) {
      detailsBtn.addEventListener("click", () => {
        if (level === 0) {
          // Empresa principal
          const accountToSelect = utils.findAccountById(
            appData.contas,
            account.id
          );
          if (accountToSelect) {
            this.selectAccount(accountToSelect);
          }
        } else {
          // Subconta
          const parentAccount = utils.findAccountById(appData.contas, parentId);
          const subaccount = parentAccount?.subcontas?.find(
            (sub) => sub.id === account.id
          );
          if (parentAccount && subaccount) {
            appState.selectedAccount = parentAccount;
            this.selectSubaccount(subaccount);
          }
        }
      });
    }

    // Event listener para o botão de gerenciar usuários
    const usersBtn = row.querySelector(".users-manager-btn");
    if (usersBtn) {
      usersBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openUsersManagementModal(account.id);
      });
    }

    // Event listener para o botão de configurações
    const settingsBtn = row.querySelector(".btn--secondary");
    if (settingsBtn && settingsBtn.querySelector(".fa-cog")) {
      settingsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openAccountSettingsModal(account.id);
      });
    }

    // Adicionar event listeners para os ícones de canal
    const channelIconElements = row.querySelectorAll(".channel-icon");
    channelIconElements.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const channel = icon.dataset.channel;
        const companyId = icon.dataset.companyId;
        const isIntegrated = icon.dataset.integrated === "true";

        if (!isIntegrated) {
          this.integrateChannel(companyId, channel, icon);
        }
      });
    });

    tbody.appendChild(row);
  },

  integrateChannel(companyId, channel, iconElement) {
    // Simular integração
    const channelName = utils.getChannelName(channel);

    if (confirm(`Deseja integrar ${channelName} para esta empresa?`)) {
      // Atualizar visualmente o ícone
      iconElement.classList.remove("not-integrated");
      iconElement.classList.add("integrated");
      iconElement.dataset.integrated = "true";
      iconElement.title = `${channelName} - Integrado`;

      // Atualizar os dados (em uma aplicação real, isso seria uma chamada API)
      const company = utils.findAccountById(
        appData.contas,
        parseInt(companyId)
      );
      if (company && company.canais) {
        company.canais[channel] = "conectado";
      }

      // Mostrar feedback
      this.showNotification(`${channelName} integrado com sucesso!`, "success");
    }
  },

  showNotification(message, type = "info") {
    // Criar elemento de notificação
    const notification = document.createElement("div");
    notification.className = `notification-toast ${type}`;
    notification.innerHTML = `
      <i class="fas fa-${
        type === "success" ? "check-circle" : "info-circle"
      }"></i>
      <span>${message}</span>
    `;

    // Adicionar ao body
    document.body.appendChild(notification);

    // Remover após 3 segundos
    setTimeout(() => {
      notification.remove();
    }, 3000);
  },

  toggleCompanyNode(companyId) {
    if (appState.expandedNodes.has(companyId)) {
      appState.expandedNodes.delete(companyId);
    } else {
      appState.expandedNodes.add(companyId);
    }
    this.renderCompaniesTable();
  },

  renderApiErrorsTable() {
    const tbody = document.getElementById("apiErrorsTableBody");
    if (!tbody) return;

    let errors = [...appData.errosApi];

    if (appState.filters.errorType) {
      errors = errors.filter((err) => err.tipo === appState.filters.errorType);
    }

    if (appState.filters.errorStatus) {
      errors = errors.filter(
        (err) => err.status === appState.filters.errorStatus
      );
    }

    tbody.innerHTML = "";

    errors.forEach((error) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><code>${error.endpoint}</code></td>
        <td>
          <span class="type-badge">${error.tipo}</span>
        </td>
        <td>
          <span class="status status--${
            error.status === "normal"
              ? "success"
              : error.status === "warning"
              ? "warning"
              : "error"
          }">
            ${error.status}
          </span>
        </td>
        <td>${error.quantidade}</td>
        <td>${utils.formatDateTime(error.ultimoErro)}</td>
      `;
      tbody.appendChild(row);
    });
  },

  renderLogsTable() {
    const tbody = document.getElementById("logsTableBody");
    if (!tbody) return;

    let logs = [...appData.logs];

    // Filtro por ID
    if (appState.filters.logSearchId) {
      logs = logs.filter(
        (log) =>
          log.clienteId
            .toLowerCase()
            .includes(appState.filters.logSearchId.toLowerCase()) ||
          log.conta
            .toLowerCase()
            .includes(appState.filters.logSearchId.toLowerCase())
      );
    }

    // Filtro por data
    if (appState.filters.logDate) {
      const filterDate = new Date(appState.filters.logDate);
      logs = logs.filter((log) => {
        const logDate = new Date(log.timestamp);
        return logDate.toDateString() === filterDate.toDateString();
      });
    }

    // Filtro por tipo
    if (appState.filters.logType) {
      logs = logs.filter((log) => log.tipo === appState.filters.logType);
    }

    // Filtro por canal
    if (appState.filters.logChannel) {
      logs = logs.filter((log) => log.canal === appState.filters.logChannel);
    }

    tbody.innerHTML = "";

    logs.forEach((log) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${utils.formatDateTime(log.timestamp)}</td>
        <td>
          <span class="type-badge ${
            log.tipo === "incoming" ? "bg-info" : "bg-success"
          }">
            <i class="fas fa-${
              log.tipo === "incoming" ? "arrow-down" : "arrow-up"
            }"></i>
            ${log.tipo === "incoming" ? "Entrada" : "Saída"}
          </span>
        </td>
        <td>${log.canal}</td>
        <td><code>${log.clienteId}</code></td>
        <td>${log.conta}</td>
        <td class="truncate" style="max-width: 200px;">${log.mensagem}</td>
      `;
      tbody.appendChild(row);
    });
  },

  renderPagination(totalItems, containerId) {
    const pagination = document.getElementById(containerId);
    if (!pagination) return;

    const totalPages = Math.ceil(totalItems / appState.itemsPerPage);

    pagination.innerHTML = "";

    if (totalPages <= 1) return;

    const prevBtn = document.createElement("button");
    prevBtn.className = "pagination-btn";
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = appState.currentPageNum === 1;
    prevBtn.addEventListener("click", () => {
      if (appState.currentPageNum > 1) {
        appState.currentPageNum--;
        this.renderRankingTable();
      }
    });
    pagination.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.className = `pagination-btn ${
        i === appState.currentPageNum ? "active" : ""
      }`;
      pageBtn.textContent = i;
      pageBtn.addEventListener("click", () => {
        appState.currentPageNum = i;
        this.renderRankingTable();
      });
      pagination.appendChild(pageBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.className = "pagination-btn";
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = appState.currentPageNum === totalPages;
    nextBtn.addEventListener("click", () => {
      if (appState.currentPageNum < totalPages) {
        appState.currentPageNum++;
        this.renderRankingTable();
      }
    });
    pagination.appendChild(nextBtn);
  },

  renderRecentActivities() {
    console.log("Renderizando atividades recentes...");
    const container = document.getElementById("recentActivities");
    if (!container) {
      console.error("Container recentActivities não encontrado!");
      return;
    }

    console.log("Container encontrado, atividades:", appData.atividades);
    container.innerHTML = "";

    if (!appData.atividades || appData.atividades.length === 0) {
      container.innerHTML = `
        <div class="timeline-item">
          <div class="timeline-content">
            <p class="timeline-description">Nenhuma atividade recente encontrada.</p>
          </div>
        </div>
      `;
      return;
    }

    appData.atividades.forEach((activity) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="timeline-content">
          <div class="timeline-time">${utils.formatDateTime(
            activity.timestamp
          )}</div>
          <p class="timeline-description">${activity.descricao}</p>
          <small class="timeline-account">Conta: ${activity.conta}</small>
        </div>
      `;
      container.appendChild(item);
    });

    console.log("Atividades renderizadas com sucesso!");
  },

  renderAccountDetail() {
    const account = appState.selectedAccount;
    if (!account) return;

    document.getElementById("accountBreadcrumb").textContent = account.nome;
    document.getElementById("detailAccountName").textContent = account.nome;
    document.getElementById("detailAccountId").textContent = account.id;
    document.getElementById("detailAccountStatus").textContent = account.status;
    document.getElementById(
      "detailAccountStatus"
    ).className = `status status--${
      account.status === "Active"
        ? "success"
        : account.status === "Trial"
        ? "warning"
        : "error"
    }`;
    document.getElementById(
      "detailUsers"
    ).textContent = `${account.usuariosOnline}/${account.usuarios}`;
    document.getElementById("detailConversations").textContent =
      utils.formatNumber(account.conversasAbertas);
    document.getElementById("detailBulks").textContent = utils.formatNumber(
      account.bulksRealizados
    );
    document.getElementById("detailBulkRemaining").textContent =
      account.bulkRestantes;
    document.getElementById("detailMessagesSent").textContent =
      utils.formatNumber(account.mensagensEnviadas);

    document.getElementById("editName").value = account.nome;
    document.getElementById("editId").value = account.id;
    document.getElementById("editStatus").value = account.status;

    this.renderChannels(account.canais);
    this.renderUsersTable(account.usuarios_detalhados || []);
    this.renderSubaccountsTable(account.subcontas || []);
    this.renderAccountTimeline();
  },

  renderChannels(canais) {
    const container = document.getElementById("channelsGrid");
    if (!container) return;

    container.innerHTML = "";

    Object.entries(canais).forEach(([channel, status]) => {
      const isConnected = status === "conectado";
      const item = document.createElement("div");
      item.className = `channel-item ${
        isConnected ? "connected" : "disconnected"
      }`;

      item.innerHTML = `
        <div class="channel-card">
          <div class="channel-header">
            <div class="channel-icon-wrapper ${channel}">
              <i class="${utils.getChannelIcon(channel)}"></i>
            </div>
            <div class="channel-status-indicator ${
              isConnected ? "active" : "inactive"
            }"></div>
          </div>
          
          <div class="channel-content">
            <h4 class="channel-title">${utils.getChannelName(channel)}</h4>
            <p class="channel-description">${this.getChannelDescription(
              channel
            )}</p>
          </div>
          
          <div class="channel-actions">
            ${
              isConnected
                ? `
                <div class="connection-status">
                  <i class="fas fa-check-circle"></i>
                  <span>Conectado</span>
                </div>
                <button class="btn-secondary channel-settings-btn" title="Configurações">
                  <i class="fas fa-cog"></i>
                </button>
                `
                : `
                <button class="btn-primary channel-connect-btn">
                  <i class="fas fa-plug"></i>
                  Conectar
                </button>
                `
            }
          </div>
        </div>
      `;

      // Adicionar eventos
      const connectBtn = item.querySelector(".channel-connect-btn");
      if (connectBtn) {
        connectBtn.addEventListener("click", () => {
          // Animação de loading
          connectBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Conectando...';
          connectBtn.disabled = true;

          setTimeout(() => {
            appState.selectedAccount.canais[channel] = "conectado";
            this.renderChannels(appState.selectedAccount.canais);
            utils.showNotification(
              `${utils.getChannelName(channel)} conectado com sucesso!`,
              "success"
            );
          }, 1500);
        });
      }

      const settingsBtn = item.querySelector(".channel-settings-btn");
      if (settingsBtn) {
        settingsBtn.addEventListener("click", () => {
          utils.showNotification(
            `Configurações do ${utils.getChannelName(channel)}`,
            "info"
          );
        });
      }

      container.appendChild(item);
    });
  },

  getChannelDescription(channel) {
    const descriptions = {
      whatsapp: "Mensagens e chamadas instantâneas",
      instagram: "Posts, stories e direct messages",
      messenger: "Chat do Facebook Messenger",
      gmail: "E-mails e notificações",
      telegram: "Mensagens seguras e grupos",
      api: "Integração via API REST",
    };
    return descriptions[channel] || "Canal de comunicação";
  },

  renderUsersTable(users) {
    const tbody = document.getElementById("usersTableBody");
    if (!tbody) return;

    tbody.innerHTML = "";

    users.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>
          <span class="type-badge">${user.cargo}</span>
        </td>
        <td>${utils.formatDateTime(user.ultimoLogin)}</td>
        <td>
          <span class="status status--${
            user.status === "online" ? "success" : "info"
          }">
            <i class="fas fa-circle" style="font-size: 8px;"></i>
            ${user.status === "online" ? "Online" : "Offline"}
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <button class="btn btn--sm btn--secondary action-btn">
              <i class="fas fa-edit"></i> Editar
            </button>
            <button class="btn btn--sm btn--outline action-btn" data-user-index="${index}">
              <i class="fas fa-trash"></i> Excluir
            </button>
          </div>
        </td>
      `;

      const deleteBtn = row.querySelector("[data-user-index]");
      deleteBtn.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja excluir este usuário?")) {
          appState.selectedAccount.usuarios_detalhados.splice(index, 1);
          this.renderUsersTable(appState.selectedAccount.usuarios_detalhados);
          utils.showNotification("Usuário excluído com sucesso!", "success");
        }
      });

      tbody.appendChild(row);
    });
  },

  renderSubaccountsTable(subcontas) {
    const tbody = document.getElementById("subaccountsTableBody");
    if (!tbody) return;

    tbody.innerHTML = "";

    subcontas.forEach((subconta) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${subconta.nome}</td>
        <td>
          <span class="type-badge">
            <i class="fas ${utils.getTypeIcon(subconta.tipo)}"></i>
            ${subconta.tipo}
          </span>
        </td>
        <td>
          <span class="status status--${
            subconta.status === "Active" ? "success" : "warning"
          }">
            ${subconta.status}
          </span>
        </td>
        <td>${utils.formatNumber(subconta.contatos)}</td>
        <td>${utils.formatNumber(subconta.mtmo)}</td>
        <td>
          <div class="action-buttons">
            <button class="btn btn--sm btn--primary action-btn" data-subaccount-id="${
              subconta.id
            }">
              <i class="fas fa-cogs"></i> Painel
            </button>
            <button class="btn btn--sm btn--secondary action-btn">
              <i class="fas fa-edit"></i> Editar
            </button>
          </div>
        </td>
      `;

      const panelBtn = row.querySelector("[data-subaccount-id]");
      panelBtn.addEventListener("click", () => {
        this.selectSubaccount(subconta);
      });

      tbody.appendChild(row);
    });
  },

  renderAccountTimeline() {
    const container = document.getElementById("accountTimeline");
    if (!container) return;

    container.innerHTML = "";

    const activities = appData.atividades.filter(
      (activity) => activity.conta === appState.selectedAccount?.nome
    );

    activities.forEach((activity) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="timeline-content">
          <div class="timeline-time">${utils.formatDateTime(
            activity.timestamp
          )}</div>
          <p class="timeline-description">${activity.descricao}</p>
        </div>
      `;
      container.appendChild(item);
    });
  },

  renderSubaccountDetail() {
    const subaccount = appState.selectedSubaccount;
    if (!subaccount) return;

    document.getElementById("subaccountBreadcrumb").textContent =
      subaccount.nome;
    document.getElementById("subaccountName").textContent = subaccount.nome;
    document.getElementById("subaccountType").textContent = subaccount.tipo;
    document.getElementById("subaccountStatus").textContent = subaccount.status;
    document.getElementById("subaccountContacts").textContent =
      utils.formatNumber(subaccount.contatos);
    document.getElementById("subaccountMtmo").textContent = utils.formatNumber(
      subaccount.mtmo
    );

    // Preencher formulário de edição
    const editNameInput = document.getElementById("editSubaccountName");
    const editTypeInput = document.getElementById("editSubaccountType");
    const editStatusInput = document.getElementById("editSubaccountStatus");

    if (editNameInput) editNameInput.value = subaccount.nome;
    if (editTypeInput) editTypeInput.value = subaccount.tipo;
    if (editStatusInput) editStatusInput.value = subaccount.status;

    this.renderSubaccountChannels();
  },

  renderSubaccountChannels() {
    const container = document.getElementById("subaccountChannelsGrid");
    if (!container) return;

    container.innerHTML = "";

    // Usar canais da subconta se existirem, senão usar canais padrão
    let channels;
    if (appState.selectedSubaccount && appState.selectedSubaccount.canais) {
      channels = appState.selectedSubaccount.canais;
    } else {
      channels = {
        whatsapp: "conectado",
        instagram: "desconectado",
        messenger: "conectado",
        gmail: "conectado",
        telegram: "desconectado",
        api: "desconectado",
      };
      // Salvar os canais padrão na subconta
      if (appState.selectedSubaccount) {
        appState.selectedSubaccount.canais = channels;
      }
    }

    Object.entries(channels).forEach(([channel, status]) => {
      const item = document.createElement("div");
      item.className = "channel-item";
      item.innerHTML = `
        <div class="channel-icon">
          <i class="${utils.getChannelIcon(channel)}"></i>
        </div>
        <div class="channel-info">
          <h4>${utils.getChannelName(channel)}</h4>
          ${
            status === "conectado"
              ? '<span class="status status--success">Conectado</span>'
              : '<button class="btn btn--sm btn--primary channel-connect-btn">Integrar</button>'
          }
        </div>
      `;

      // Adicionar evento de clique no botão de integrar
      const connectBtn = item.querySelector(".channel-connect-btn");
      if (connectBtn) {
        connectBtn.addEventListener("click", () => {
          if (appState.selectedSubaccount) {
            if (!appState.selectedSubaccount.canais) {
              appState.selectedSubaccount.canais = {};
            }
            appState.selectedSubaccount.canais[channel] = "conectado";
            this.renderSubaccountChannels();
            utils.showNotification(
              `${utils.getChannelName(
                channel
              )} integrado com sucesso na subconta!`,
              "success"
            );
          }
        });
      }

      container.appendChild(item);
    });
  },

  renderNotifications() {
    const container = document.getElementById("notificationList");
    if (!container) return;

    container.innerHTML = "";

    const notifications = [
      {
        type: "user",
        title: "Novo usuário criado",
        description: "João Silva foi adicionado à conta Cantina do Marcio",
        time: "2025-07-15T14:00:00",
        unread: true,
      },
      {
        type: "error",
        title: "Erro de API detectado",
        description: "Endpoint /api/messages apresentou 6 erros",
        time: "2025-07-15T13:30:00",
        unread: true,
      },
      {
        type: "integration",
        title: "Nova integração",
        description: "WhatsApp integrado com sucesso na conta Tech Solutions",
        time: "2025-07-15T12:45:00",
        unread: false,
      },
    ];

    notifications.forEach((notification) => {
      const item = document.createElement("div");
      item.className = `notification-item ${
        notification.unread ? "unread" : ""
      }`;
      item.innerHTML = `
        <div class="notification-icon">
          <i class="fas fa-${
            notification.type === "user"
              ? "user-plus"
              : notification.type === "error"
              ? "exclamation-triangle"
              : "plug"
          }"></i>
        </div>
        <div class="notification-content">
          <h4>${notification.title}</h4>
          <p>${notification.description}</p>
          <span class="notification-time">${utils.formatDateTime(
            notification.time
          )}</span>
        </div>
      `;
      container.appendChild(item);
    });
  },

  updateUI() {
    console.log("Atualizando UI...", { currentPage: appState.currentPage });

    // Mostrar/esconder páginas
    const dashboardPage = document.getElementById("dashboardPage");
    const accountDetailPage = document.getElementById("accountDetailPage");
    const subaccountDetailPage = document.getElementById(
      "subaccountDetailPage"
    );

    if (dashboardPage) {
      dashboardPage.classList.toggle(
        "hidden",
        appState.currentPage !== "dashboard"
      );
    }
    if (accountDetailPage) {
      accountDetailPage.classList.toggle(
        "hidden",
        appState.currentPage !== "accountDetail"
      );
    }
    if (subaccountDetailPage) {
      subaccountDetailPage.classList.toggle(
        "hidden",
        appState.currentPage !== "subaccountDetail"
      );
    }

    // Atualizar sidebar
    this.renderSidebar();

    // Atualizar conteúdo baseado na página atual
    if (appState.currentPage === "dashboard") {
      console.log("Renderizando dashboard...");
      this.renderMetrics();
      this.renderCharts();
      this.renderCompaniesTable();
      this.renderRankingTable();

      // Restringir acesso baseado no modo
      if (appState.mode === "master") {
        this.renderApiErrorsTable();
        this.renderLogsTable();
      } else {
        // Ocultar painéis restritos no modo admin
        this.hideRestrictedPanels();
      }

      // Renderizar atividades recentes com delay para garantir DOM
      setTimeout(() => {
        this.renderRecentActivities();
      }, 100);
    } else if (appState.currentPage === "accountDetail") {
      this.renderAccountDetail();
    } else if (appState.currentPage === "subaccountDetail") {
      this.renderSubaccountDetail();
    }

    // Aplicar restrições de acesso por modo
    this.applyModeRestrictions();

    // Atualizar tema
    document.body.setAttribute("data-color-scheme", appState.theme);

    // Atualizar ícone do tema
    const themeIcon = document.querySelector("#themeToggle i");
    if (themeIcon) {
      themeIcon.className =
        appState.theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    // Atualizar modo
    document.querySelectorAll(".mode-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mode === appState.mode);
    });

    // Renderizar notificações
    this.renderNotifications();

    console.log("UI atualizada com sucesso");
  },

  // Ocultar painéis restritos para o modo admin
  hideRestrictedPanels() {
    const apiErrorsSection = document
      .querySelector("#apiErrorsTable")
      ?.closest(".card");
    const logsSection = document.querySelector("#logsTable")?.closest(".card");

    if (apiErrorsSection) {
      apiErrorsSection.style.display = "none";
    }
    if (logsSection) {
      logsSection.style.display = "none";
    }
  },

  // Aplicar restrições de acesso baseadas no modo
  applyModeRestrictions() {
    const restrictedElements = document.querySelectorAll(
      "[data-mode-restriction]"
    );
    const modeIndicator = document.getElementById("modeIndicator");

    // Atualizar indicador de modo
    if (modeIndicator) {
      modeIndicator.className = `mode-indicator ${appState.mode}`;
      const icon = modeIndicator.querySelector("i");
      const text = modeIndicator.querySelector("span");

      if (appState.mode === "master") {
        if (icon) icon.className = "fas fa-crown";
        if (text) text.textContent = "Modo MASTER";
        modeIndicator.title = "Acesso completo a todas as funcionalidades";
      } else {
        if (icon) icon.className = "fas fa-user-shield";
        if (text) text.textContent = "Modo ADMIN";
        modeIndicator.title =
          "Acesso limitado - alguns painéis requerem modo MASTER";
      }
    }

    // Aplicar restrições aos elementos
    restrictedElements.forEach((element) => {
      const requiredMode = element.getAttribute("data-mode-restriction");

      if (
        appState.mode === "master" ||
        !requiredMode ||
        requiredMode === appState.mode
      ) {
        // Mostrar elemento
        element.style.display = "block";
        element.classList.remove("admin-hidden");
        element.style.pointerEvents = "auto";
        element.style.opacity = "1";
      } else {
        // Ocultar elemento no modo admin
        element.style.display = "none";
        element.classList.add("admin-hidden");
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";

        // Adicionar evento de click para mostrar mensagem informativa
        element.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          utils.showNotification(
            "Esta funcionalidade está disponível apenas no modo MASTER. Troque para o modo MASTER para acessar.",
            "warning"
          );
        });
      }
    });

    console.log(
      `Restrições aplicadas para o modo: ${appState.mode.toUpperCase()}`
    );

    // Mostrar notificação informativa sobre o modo atual
    if (appState.mode === "admin") {
      setTimeout(() => {
        utils.showNotification(
          "Modo ADMIN ativo: Alguns painéis estão restritos. Mude para MASTER para acesso completo.",
          "info"
        );
      }, 1000);
    }
  },
};

// Event Listeners
function setupEventListeners() {
  console.log("Configurando event listeners...");

  // Função helper para adicionar event listener com verificação
  function addListener(elementId, event, handler, description) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener(event, handler);
      console.log(`✅ ${description} configurado`);
    } else {
      console.warn(
        `⚠️ Elemento ${elementId} não encontrado para ${description}`
      );
    }
  }

  // Toggle sidebar (mobile)
  addListener(
    "sidebarToggle",
    "click",
    () => {
      appState.sidebarOpen = !appState.sidebarOpen;
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        sidebar.classList.toggle("active", appState.sidebarOpen);
      }
    },
    "Toggle sidebar"
  );

  // Toggle tema
  addListener(
    "themeToggle",
    "click",
    () => {
      appState.theme = appState.theme === "light" ? "dark" : "light";
      components.updateUI();
    },
    "Toggle tema"
  );

  // Aplicar filtros
  addListener(
    "applyFilter",
    "click",
    () => {
      utils.showNotification("Filtros aplicados com sucesso!", "success");
      components.updateUI();
    },
    "Aplicar filtros"
  );

  // Modo admin/master - CORRIGIDO
  document.querySelectorAll(".mode-btn").forEach((btn, index) => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        appState.mode = btn.dataset.mode;
        components.updateUI();
        utils.showNotification(
          `Modo ${appState.mode.toUpperCase()} ativado`,
          "info"
        );
      });
      console.log(`✅ Mode button ${index + 1} configurado`);
    }
  });

  // Busca na sidebar
  addListener(
    "searchAccounts",
    "input",
    (e) => {
      appState.filters.searchTerm = e.target.value;
      components.renderSidebar();
    },
    "Busca na sidebar"
  );

  // Controles da sidebar
  addListener(
    "expandAll",
    "click",
    () => {
      const allIds = utils.flattenAccounts(appData.contas).map((acc) => acc.id);
      appState.expandedNodes = new Set(allIds);
      components.renderSidebar();
    },
    "Expandir todos"
  );

  addListener(
    "collapseAll",
    "click",
    () => {
      appState.expandedNodes.clear();
      components.renderSidebar();
    },
    "Recolher todos"
  );

  // Filtros das tabelas
  document.getElementById("searchRanking").addEventListener("input", (e) => {
    appState.filters.searchTerm = e.target.value;
    appState.currentPageNum = 1;
    components.renderRankingTable();
  });

  document.getElementById("filterType").addEventListener("change", (e) => {
    appState.filters.type = e.target.value;
    appState.currentPageNum = 1;
    components.renderRankingTable();
  });

  document.getElementById("filterStatus").addEventListener("change", (e) => {
    appState.filters.status = e.target.value;
    appState.currentPageNum = 1;
    components.renderRankingTable();
  });

  // Filtros da tabela de empresas
  const searchCompanies = document.getElementById("searchCompanies");
  if (searchCompanies) {
    searchCompanies.addEventListener("input", (e) => {
      appState.filters.searchTerm = e.target.value;
      appState.currentPageNum = 1;
      components.renderCompaniesTable();
    });
  }

  const filterCompanyStatus = document.getElementById("filterCompanyStatus");
  if (filterCompanyStatus) {
    filterCompanyStatus.addEventListener("change", (e) => {
      appState.filters.status = e.target.value;
      appState.currentPageNum = 1;
      components.renderCompaniesTable();
    });
  }

  // Exportar empresas
  const exportCompanies = document.getElementById("exportCompanies");
  if (exportCompanies) {
    exportCompanies.addEventListener("click", () => {
      const companies = appData.contas.map((company) => ({
        Nome: company.nome,
        ID: company.id,
        Status: company.status === "Active" ? "ATIVO" : "INATIVO",
        Usuarios: company.usuarios,
        Contatos: company.contatos,
        MTMO: company.mtmo,
      }));
      utils.exportToCSV(companies, "empresas.csv");
      utils.showNotification(
        "Dados das empresas exportados com sucesso!",
        "success"
      );
    });
  }

  // Selecionar todas as empresas
  const selectAllCompanies = document.getElementById("selectAllCompanies");
  if (selectAllCompanies) {
    selectAllCompanies.addEventListener("change", (e) => {
      const checkboxes = document.querySelectorAll(".company-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
      });
    });
  }

  // Filtros de erros de API
  document.getElementById("filterErrorType").addEventListener("change", (e) => {
    appState.filters.errorType = e.target.value;
    components.renderApiErrorsTable();
  });

  document
    .getElementById("filterErrorStatus")
    .addEventListener("change", (e) => {
      appState.filters.errorStatus = e.target.value;
      components.renderApiErrorsTable();
    });

  // Filtros de logs
  document.getElementById("searchLogsById").addEventListener("input", (e) => {
    appState.filters.logSearchId = e.target.value;
    components.renderLogsTable();
  });

  document.getElementById("filterLogDate").addEventListener("change", (e) => {
    appState.filters.logDate = e.target.value;
    components.renderLogsTable();
  });

  document.getElementById("filterLogType").addEventListener("change", (e) => {
    appState.filters.logType = e.target.value;
    components.renderLogsTable();
  });

  document
    .getElementById("filterLogChannel")
    .addEventListener("change", (e) => {
      appState.filters.logChannel = e.target.value;
      components.renderLogsTable();
    });

  // Exportar dados
  document.getElementById("exportRanking").addEventListener("click", () => {
    const accounts = utils.flattenAccounts(appData.contas);
    const csvData = accounts.map((acc) => ({
      Nome: acc.nome,
      Tipo: acc.tipo,
      Status: acc.status,
      Contatos: acc.contatos,
      MTMO: acc.mtmo,
    }));
    utils.exportToCSV(csvData, "ranking_contas.csv");
    utils.showNotification("Ranking exportado com sucesso!", "success");
  });

  document.getElementById("exportLogs").addEventListener("click", () => {
    let logs = [...appData.logs];

    // Aplicar os mesmos filtros da tabela
    if (appState.filters.logSearchId) {
      logs = logs.filter(
        (log) =>
          log.clienteId
            .toLowerCase()
            .includes(appState.filters.logSearchId.toLowerCase()) ||
          log.conta
            .toLowerCase()
            .includes(appState.filters.logSearchId.toLowerCase())
      );
    }

    if (appState.filters.logDate) {
      const filterDate = new Date(appState.filters.logDate);
      logs = logs.filter((log) => {
        const logDate = new Date(log.timestamp);
        return logDate.toDateString() === filterDate.toDateString();
      });
    }

    if (appState.filters.logType) {
      logs = logs.filter((log) => log.tipo === appState.filters.logType);
    }

    if (appState.filters.logChannel) {
      logs = logs.filter((log) => log.canal === appState.filters.logChannel);
    }

    const csvData = logs.map((log) => ({
      Timestamp: utils.formatDateTime(log.timestamp),
      Tipo: log.tipo === "incoming" ? "Entrada" : "Saída",
      Canal: log.canal,
      "Cliente ID": log.clienteId,
      Conta: log.conta,
      Mensagem: log.mensagem,
    }));
    utils.exportToCSV(csvData, "logs_pesquisa.csv");
    utils.showNotification("Logs exportados com sucesso!", "success");
  });

  // Navegação
  document.getElementById("backToDashboard").addEventListener("click", () => {
    appState.currentPage = "dashboard";
    appState.selectedAccount = null;
    components.updateUI();
  });

  document.getElementById("backToAccount").addEventListener("click", () => {
    appState.currentPage = "accountDetail";
    appState.selectedSubaccount = null;
    components.updateUI();
  });

  // Ações da conta
  document.getElementById("generateReport").addEventListener("click", () => {
    utils.showNotification("Relatório gerado com sucesso!", "success");
  });

  // Modais - CORRIGIDO
  document.getElementById("createUser").addEventListener("click", () => {
    utils.openModal("createUserModal");
  });

  document.getElementById("openUserModal").addEventListener("click", () => {
    utils.openModal("createUserModal");
  });

  document.getElementById("createSubaccount").addEventListener("click", () => {
    utils.openModal("createSubaccountModal");
  });

  document
    .getElementById("openSubaccountModal")
    .addEventListener("click", () => {
      utils.openModal("createSubaccountModal");
    });

  // Formulário de edição da conta
  document.getElementById("editAccountForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("editName").value;
    const id = document.getElementById("editId").value;
    const status = document.getElementById("editStatus").value;

    if (appState.selectedAccount) {
      appState.selectedAccount.nome = name;
      appState.selectedAccount.id = id;
      appState.selectedAccount.status = status;
      components.updateUI();
      utils.showNotification("Conta atualizada com sucesso!", "success");
    }
  });

  // Formulário de edição da subconta
  const editSubaccountForm = document.getElementById("editSubaccountForm");
  if (editSubaccountForm) {
    editSubaccountForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("editSubaccountName").value;
      const type = document.getElementById("editSubaccountType").value;
      const status = document.getElementById("editSubaccountStatus").value;

      if (appState.selectedSubaccount) {
        appState.selectedSubaccount.nome = name;
        appState.selectedSubaccount.tipo = type;
        appState.selectedSubaccount.status = status;

        // Atualizar na conta pai também
        if (appState.selectedAccount && appState.selectedAccount.subcontas) {
          const subaccountIndex = appState.selectedAccount.subcontas.findIndex(
            (sub) => sub.id === appState.selectedSubaccount.id
          );
          if (subaccountIndex !== -1) {
            appState.selectedAccount.subcontas[subaccountIndex] = {
              ...appState.selectedSubaccount,
            };
          }
        }

        components.updateUI();
        utils.showNotification("Subconta atualizada com sucesso!", "success");
      }
    });
  }

  // Fechar modais
  document
    .getElementById("closeModal")
    .addEventListener("click", utils.closeModal);
  document
    .getElementById("cancelModal")
    .addEventListener("click", utils.closeModal);
  document
    .getElementById("closeSubaccountModal")
    .addEventListener("click", utils.closeModal);
  document
    .getElementById("cancelSubaccountModal")
    .addEventListener("click", utils.closeModal);
  document
    .getElementById("closeManageUsersModal")
    .addEventListener("click", utils.closeModal);
  document
    .getElementById("closeEditUserModal")
    .addEventListener("click", utils.closeModal);
  document
    .getElementById("cancelEditUser")
    .addEventListener("click", utils.closeModal);
  document
    .getElementById("closeAccountSettingsModal")
    .addEventListener("click", utils.closeModal);
  document
    .getElementById("cancelAccountSettings")
    .addEventListener("click", utils.closeModal);

  // Formulários dos modais
  document.getElementById("createUserForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const role = document.getElementById("userRole").value;

    if (appState.selectedAccount) {
      if (!appState.selectedAccount.usuarios_detalhados) {
        appState.selectedAccount.usuarios_detalhados = [];
      }
      appState.selectedAccount.usuarios_detalhados.push({
        nome: name,
        email: email,
        cargo: role,
        ultimoLogin: new Date().toISOString(),
        status: "offline",
      });
      components.renderUsersTable(appState.selectedAccount.usuarios_detalhados);
      utils.closeModal();
      utils.showNotification("Usuário criado com sucesso!", "success");
    }
  });

  document
    .getElementById("createSubaccountForm")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("subaccountNameInput").value;
      const type = document.getElementById("subaccountTypeInput").value;

      if (appState.selectedAccount) {
        if (!appState.selectedAccount.subcontas) {
          appState.selectedAccount.subcontas = [];
        }
        const newSubaccount = {
          id: Date.now(),
          nome: name,
          tipo: type,
          status: "Active",
          contatos: 0,
          mtmo: 0,
        };
        appState.selectedAccount.subcontas.push(newSubaccount);
        components.renderSubaccountsTable(appState.selectedAccount.subcontas);
        utils.closeModal();
        utils.showNotification("Subconta criada com sucesso!", "success");
      }
    });

  // Formulário de convidar usuário
  document.getElementById("inviteUserForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("inviteUserEmail").value;
    const role = document.getElementById("inviteUserRole").value;

    // Encontrar a empresa atualmente sendo gerenciada
    const companyNameHeader = document.getElementById("companyNameHeader");
    if (companyNameHeader && companyNameHeader.textContent) {
      const companyName = companyNameHeader.textContent;
      const company = appData.contas.find((c) => c.nome === companyName);

      if (company) {
        components.inviteUser(company.id, email, role);

        // Limpar formulário
        document.getElementById("inviteUserEmail").value = "";
        document.getElementById("inviteUserRole").value = "admin";
      }
    }
  });

  // Formulário de editar usuário
  document.getElementById("editUserForm").addEventListener("submit", (e) => {
    e.preventDefault();
    components.saveUserEdit();
  });

  // Formulário de configurações da conta
  document
    .getElementById("accountSettingsForm")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      components.saveAccountSettings();
    });

  // Botão de upload de imagem
  document.getElementById("uploadImageBtn").addEventListener("click", () => {
    document.getElementById("accountImageInput").click();
  });

  // Input de arquivo de imagem
  document
    .getElementById("accountImageInput")
    .addEventListener("change", () => {
      components.handleImageUpload();
    });

  // Botão de remover imagem
  document.getElementById("removeImageBtn").addEventListener("click", () => {
    components.removeAccountImage();
  });

  // Fechar modal clicando fora
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) {
      utils.closeModal();
    }
  });

  // Painel de notificações
  document.getElementById("notificationBtn").addEventListener("click", () => {
    document.getElementById("notificationPanel").classList.toggle("active");
  });

  document.getElementById("markAllRead").addEventListener("click", () => {
    document.querySelectorAll(".notification-item").forEach((item) => {
      item.classList.remove("unread");
    });
    document.querySelector(".notification-badge").textContent = "0";
    utils.showNotification(
      "Todas as notificações foram marcadas como lidas!",
      "info"
    );
  });

  // Navegação por teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (
        document.getElementById("modalOverlay").classList.contains("active")
      ) {
        utils.closeModal();
      } else if (
        document
          .getElementById("notificationPanel")
          .classList.contains("active")
      ) {
        document.getElementById("notificationPanel").classList.remove("active");
      } else if (appState.currentPage === "subaccountDetail") {
        appState.currentPage = "accountDetail";
        appState.selectedSubaccount = null;
        components.updateUI();
      } else if (appState.currentPage === "accountDetail") {
        appState.currentPage = "dashboard";
        appState.selectedAccount = null;
        components.updateUI();
      }
    }
  });

  // Fechar sidebar e notifications ao clicar fora (mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && appState.sidebarOpen) {
      if (
        !document.getElementById("sidebar").contains(e.target) &&
        !document.getElementById("sidebarToggle").contains(e.target)
      ) {
        appState.sidebarOpen = false;
        document.getElementById("sidebar").classList.remove("active");
      }
    }

    if (
      document.getElementById("notificationPanel").classList.contains("active")
    ) {
      if (
        !document.getElementById("notificationPanel").contains(e.target) &&
        !document.getElementById("notificationBtn").contains(e.target)
      ) {
        document.getElementById("notificationPanel").classList.remove("active");
      }
    }
  });

  // Redimensionamento da janela
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      appState.sidebarOpen = false;
      document.getElementById("sidebar").classList.remove("active");
    }
  });

  console.log("Event listeners configurados!");
}

// Inicialização
function init() {
  console.log("Inicializando Dashboard de Contas...");

  // Garantir que todos os elementos existam antes de prosseguir
  const requiredElements = [
    "sidebar",
    "accountsTree",
    "dashboardPage",
    "metricContas",
    "metricErros",
    "metricMtmo",
    "metricCanais",
    "rankingTableBody",
  ];

  let allElementsExist = true;
  for (const elementId of requiredElements) {
    if (!document.getElementById(elementId)) {
      console.error(`Elemento ${elementId} não encontrado`);
      allElementsExist = false;
    }
  }

  if (!allElementsExist) {
    console.error(
      "Alguns elementos não foram encontrados. Tentando novamente em 500ms..."
    );
    setTimeout(init, 500);
    return;
  }

  setupEventListeners();

  // Verificar se Chart.js está disponível
  if (typeof Chart !== "undefined") {
    console.log("Chart.js carregado com sucesso");
    components.updateUI();
    // Garantir que as restrições de modo sejam aplicadas na inicialização
    components.applyModeRestrictions();
    utils.showNotification("Dashboard carregado com sucesso!", "success");
  } else {
    console.error("Chart.js não foi carregado");
    // Renderizar sem gráficos primeiro
    components.updateUI();
    // Garantir que as restrições de modo sejam aplicadas na inicialização
    components.applyModeRestrictions();

    // Tentar carregar gráficos após um tempo
    setTimeout(() => {
      if (typeof Chart !== "undefined") {
        console.log("Chart.js carregado após timeout");
        components.renderCharts();
      } else {
        console.error("Chart.js ainda não está disponível");
      }
    }, 1000);

    utils.showNotification("Dashboard carregado (sem gráficos)", "info");
  }
}

// Iniciar aplicação quando DOM estiver pronto
function startApp() {
  console.log("=== GODVIEW ADMIN DASHBOARD ===");
  console.log("Estado do DOM:", document.readyState);
  console.log("Chart.js disponível:", typeof Chart !== "undefined");

  // Aguardar um pouco para garantir que tudo esteja carregado
  setTimeout(() => {
    // Listar elementos importantes
    const importantElements = [
      "sidebar",
      "accountsTree",
      "dashboardPage",
      "metricContas",
      "metricErros",
      "metricMtmo",
      "metricCanais",
      "rankingTableBody",
      "sidebarToggle",
      "themeToggle",
    ];

    console.log("=== VERIFICAÇÃO DE ELEMENTOS ===");
    let allFound = true;
    importantElements.forEach((id) => {
      const element = document.getElementById(id);
      console.log(`${id}: ${element ? "✅ Encontrado" : "❌ Não encontrado"}`);
      if (!element) allFound = false;
    });

    if (allFound) {
      init();
    } else {
      console.error(
        "❌ Alguns elementos não foram encontrados. Verifique o HTML."
      );
      // Tentar forçar a renderização básica
      console.log("Tentando renderização de emergência...");

      // Renderizar métricas básicas
      const metrics = appData.metricas;
      if (document.getElementById("metricContas")) {
        document.getElementById("metricContas").textContent =
          metrics.totalContas.valor;
      }
      if (document.getElementById("metricErros")) {
        document.getElementById("metricErros").textContent =
          metrics.errosDoMes.valor;
      }
      if (document.getElementById("metricMtmo")) {
        document.getElementById("metricMtmo").textContent =
          metrics.mtmoTotal.valor;
      }
      if (document.getElementById("metricCanais")) {
        document.getElementById("metricCanais").textContent =
          metrics.canaisAtivos.valor;
      }

      // Renderizar tabela básica
      const tbody = document.getElementById("rankingTableBody");
      if (tbody) {
        let html = "";
        appData.contas.forEach((conta) => {
          html += `
            <tr>
              <td>${conta.nome}</td>
              <td>${conta.tipo}</td>
              <td>${conta.status}</td>
              <td>${conta.contatos.toLocaleString("pt-BR")}</td>
              <td>${conta.mtmo.toLocaleString("pt-BR")}</td>
              <td><button class="btn btn--sm btn--primary">Ver</button></td>
            </tr>
          `;
        });
        tbody.innerHTML = html;
      }
    }
  }, 250);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}
