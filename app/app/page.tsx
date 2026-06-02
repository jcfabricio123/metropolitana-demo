const card = {
  background: '#fff',
  borderRadius: 16,
  padding: 24,
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
} as const;

const badge = {
  display: 'inline-block',
  padding: '6px 10px',
  borderRadius: 999,
  border: '1px solid #d6cec2',
  fontSize: 12,
  marginBottom: 10,
  background: '#faf8f5',
} as const;

export default function Home() {
  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '32px 20px 60px' }}>
      <section style={{ ...card, marginBottom: 20 }}>
        <div style={badge}>DEMO EXECUTIVA</div>
        <h1 style={{ fontSize: 40, margin: '0 0 12px' }}>Metropolitana Px</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 860 }}>
          Sistema para gestão completa da aprovação de loteamentos, acompanhando
          cada empreendimento desde a viabilidade até o registro final consolidado.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginBottom: 20 }}>
        <div style={card}>
          <h2>Pré-fases</h2>
          <p>Viabilidade, análise inicial e due diligence antes do início técnico.</p>
        </div>
        <div style={card}>
          <h2>Núcleo técnico</h2>
          <p>Disciplinas, responsáveis, protocolos, exigências, documentos e cronograma.</p>
        </div>
        <div style={card}>
          <h2>Fases finais</h2>
          <p>Consolidação municipal, decreto, cartório, publicações e encerramento.</p>
        </div>
      </section>

      <section style={{ ...card, marginBottom: 20 }}>
        <h2>Fluxo do loteamento</h2>
        <ol style={{ lineHeight: 1.8, paddingLeft: 22 }}>
          <li>Viabilidade.</li>
          <li>Due diligence de matrícula e georreferenciamento.</li>
          <li>Projetos técnicos por disciplina.</li>
          <li>Aprovações setoriais e atendimento de exigências.</li>
          <li>Consolidação municipal.</li>
          <li>Decreto de aprovação.</li>
          <li>Cartório e publicações.</li>
          <li>Registro consolidado e encerramento.</li>
        </ol>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, marginBottom: 20 }}>
        <div style={card}>
          <h2>Portal do sócio</h2>
          <p>Visão resumida do andamento, marcos principais e documentos liberados.</p>
        </div>
        <div style={card}>
          <h2>Auditoria</h2>
          <p>Registro de atos, mudanças de status, exigências, protocolos e histórico documental.</p>
        </div>
      </section>

      <section style={card}>
        <h2>Objetivo desta demo</h2>
        <p style={{ lineHeight: 1.7 }}>
          Esta entrega foi preparada para permitir visualização rápida do conceito
          do sistema e apoiar apresentação aos sócios. A versão de produção completa
          seguirá a mesma lógica operacional, com banco, segurança, rastreabilidade
          e regras de negócio aprofundadas.
        </p>
      </section>
    </main>
  );
}
