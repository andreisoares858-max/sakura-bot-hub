

## Plano: Admin Secreto com Supabase Auth + CMS

### Pré-requisito
**Conectar Supabase ao projeto** — sem isso, não é possível implementar autenticação nem persistência de dados. Você pode fazer isso pelo painel do Lovable em Settings > Supabase, ou habilitar Lovable Cloud.

### Após conectar Supabase, o plano é:

#### 1. Banco de dados (Migrations)
- Criar enum `app_role` com valor `admin`
- Criar tabela `user_roles` (user_id, role) com RLS
- Criar função `has_role()` (security definer) para checar admin
- Criar tabela `site_content` (page, section_key, content JSON) com RLS — admins editam, todos leem
- Inserir o conteúdo atual do site como dados iniciais

#### 2. Página de login secreta (`/admin-login`)
- Rota `/admin-login` — não aparece na navbar nem no footer
- Formulário simples de email/senha usando Supabase Auth
- Após login, redireciona para a página anterior
- Mantém a estética do site (glassmorphism, cores sakura)

#### 3. Contexto de autenticação
- Criar `AuthContext` com estado do usuário e verificação de role admin
- Wrapping do app com o provider

#### 4. Modo de edição inline
- Quando admin está logado, exibir um botão flutuante discreto "Editar" no canto
- Ao ativar edição, os textos do site ficam editáveis (contentEditable ou inputs inline)
- Botão "Salvar" persiste as alterações na tabela `site_content`
- Botão "Sair" faz logout

#### 5. Hook de conteúdo dinâmico
- Criar hook `useSiteContent(page, section)` que busca do Supabase
- Fallback para conteúdo estático atual quando não há dados no banco
- Cache com React Query

#### Arquivos novos
- `src/contexts/AuthContext.tsx`
- `src/pages/AdminLogin.tsx`
- `src/hooks/useSiteContent.ts`
- `src/components/EditableText.tsx`
- `src/components/AdminToolbar.tsx`

#### Arquivos modificados
- `src/App.tsx` — adicionar rota `/admin-login` e AuthProvider
- `src/pages/Index.tsx` — usar conteúdo dinâmico
- `src/pages/Docs.tsx` — usar conteúdo dinâmico
- Demais páginas de conteúdo

### Próximo passo imediato
Conecte o Supabase ao projeto para que possamos prosseguir com a implementação.

