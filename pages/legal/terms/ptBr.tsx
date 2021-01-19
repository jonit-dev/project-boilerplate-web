import Link from "next/link";

import { InternalPage } from "../../../components/theme/InternalPage";
import { appEnv } from "../../../constants/appEnv";

export default function TermsOfUseScreen() {
  return (
    <InternalPage>
      <h2> Termos e Condições </h2>
      <h4> 1. Acordo com os termos </h4>
      <p>
        1.1 Estes Termos e Condições constituem um acordo legalmente vinculativo
        feito entre você, seja pessoalmente ou em nome de uma entidade (você), e{" "}
        {appEnv.general.name}, localizado em {appEnv.general.address}, {""}
        {appEnv.general.province}, {appEnv.general.country} -{" "}
        {appEnv.general.zipCode} (nós, nós), em relação ao seu acesso e uso de o{" "}
        {appEnv.general.name} site, bem como quaisquer aplicativos relacionados
        (o Site).
      </p>
      <p>
        O Site fornece os seguintes serviços: "{appEnv.general.description}"
        (Serviços). Você concorda que, ao acessar o Site e / ou Serviços, você
        leu, compreendeu e concorda em obedecer a todos estes Termos e
        Condições. Se você não concordar com todos estes Termos e Condições,
        então você está proibido de usar o Site e os Serviços e deve interrompa
        o uso imediatamente. Recomendamos que você imprima uma cópia destes
        Termos e Condições para referência futura.
      </p>
      <p>
        1.2 As políticas suplementares estabelecidas na Seção 1.7 abaixo, bem
        como quaisquer termos e condições suplementares ou documentos que possam
        ser publicados no Site de vez em quando, são expressamente incorporados
        por referência.
      </p>
      <p>
        1.3 Podemos fazer alterações a estes Termos e Condições a qualquer
        momento. A versão atualizada destes Termos e Condições será indicada
        pela data "Revisada" e a versão atualizada entrará em vigor logo depois
        de ser acessível. Você é responsável por revisar estes Termos e
        Condições para se manter informado das atualizações. Seu uso continuado
        do Site representa que você aceitou tais alterações.
      </p>
      <p>
        1.4 Podemos atualizar ou alterar o Site de tempos em tempos para
        refletir mudanças em nossos produtos, nas necessidades de nossos
        usuários e / ou em nossos negócios prioridades.
      </p>
      <p>
        1.5 Nosso site é direcionado a pessoas que residem em{" "}
        {appEnv.general.country}. As informações fornecidas no Site não se
        destinam a distribuição para ou uso por qualquer pessoa ou entidade em
        qualquer jurisdição ou país onde tal distribuição ou uso seria contrário
        à lei ou regulamento ou que nos sujeitaria a qualquer exigência de
        registro dentro de tais jurisdição ou país.
      </p>
      <p>
        1.6 O Site é destinado a usuários com pelo menos 18 anos de idade. Se
        vocês tiver menos de 18 anos, você não tem permissão para se registrar
        no Site ou usar os Serviços sem permissão dos pais.
      </p>
      <p>
        1.7 Políticas adicionais que também se aplicam ao seu uso do Site
        incluem: Nossa <Link href="/privacy">Política de Privacidade</Link>, que
        estabelece os termos em que processamos quaisquer dados pessoais que
        coletamos de você, ou que você nos fornece. Ao usar o Site, você
        concorda com tal processamento e você garante que todos os dados
        fornecidos por você são precisos. Nossa Política de Uso Aceitável, que
        define os usos permitidos e usos proibidos do Site. Ao usar o Site, você
        deve cumprir esta Política de Uso Aceitável. Nossa Política de Cookies,
        que estabelece informações sobre os cookies no site.
      </p>
      <h4> 2. Uso aceitável </h4>
      <p>
        2.1 Nossa Política de Uso Aceitável completa, define todos os usos
        permitidos e usos proibidos deste site.
      </p>
      <p>
        2.2 Você não pode acessar ou usar o Site para qualquer propósito
        diferente daquele para o qual disponibilizamos o site e os nossos
        serviços. O site não pode ser usado em conexão com quaisquer
        empreendimentos comerciais, exceto aqueles que são especificamente
        endossados ​​ou aprovados por nós.
      </p>
      <h4> 3. Informações que você nos fornece </h4>
      <p>3.1 Você representa e garante que:</p>
      <ul>
        <li>
          (a) todas as informações de registro que você enviar serão
          verdadeiras, precisas, atual, completo e relacionado a você e não a
          terceiros;
        </li>
        <li>
          (b) você manterá a precisão de tais informações e prontamente
          atualizar essas informações conforme necessário;
        </li>
        <li>
          (c) você manterá sua senha confidencial e será responsável para todo o
          uso de sua senha e conta;
        </li>
        <li>
          (d) você tem a capacidade legal e concorda em cumprir estes Termos e
          Condições; e
        </li>
        <li>
          (e) você não for menor na jurisdição em que reside, ou se for menor,
          você recebeu permissão dos pais para usar o Site.
        </li>
      </ul>
      <p>
        Se você conhece ou suspeita que outra pessoa além de você conhece seu
        usuário informações (como um código de identificação ou nome de usuário)
        e / ou senha, você deve nos notificar imediatamente em{" "}
        {appEnv.general.adminEmail}.
      </p>
      <p>
        3.2 Se você fornecer qualquer informação que seja falsa, imprecisa, não
        atual ou incompleta, podemos suspender ou encerrar sua conta. Nós
        podemos remover ou alterar um nome de usuário que você selecionar se
        determinarmos que tal usuário nome é impróprio.
      </p>
      <h4> 4. Conteúdo que você nos fornece </h4>
      <p>
        4.1 Pode haver oportunidades para você postar conteúdo no Site ou envie
        feedback para nós (Conteúdo do usuário). Você entende e concorda que seu
        O Conteúdo do Usuário pode ser visualizado por outros usuários no Site,
        e que eles podem ser capaz de ver quem postou esse Conteúdo do Usuário.
      </p>
      <p>
        4.2 Você também concorda que podemos usar o seu Conteúdo do Usuário para
        qualquer outro fins de qualquer natureza em perpetuidade sem pagamento a
        você, e combinar seu Conteúdo do usuário com outro conteúdo para uso
        dentro do Site e de outra forma. Não temos que atribuir seu Conteúdo do
        Usuário a você. Quando você carrega ou publica conteúdo em nosso site,
        você nos concede o seguinte direitos de uso desse conteúdo:
      </p>
      <p>
        4.3 Na postagem de Conteúdo do Usuário, incluindo comentários ou fazendo
        contato com outros usuários do Site você deverá cumprir nossa Política
        de Uso Aceitável.
      </p>
      <p>
        4.4 Você garante que qualquer Conteúdo do Usuário está em conformidade
        com nossa Política de uso, e você será responsável por nós e nos
        indenizará por qualquer violação dessa garantia. Isso significa que você
        será responsável por qualquer perda ou danos que sofremos como resultado
        da violação desta garantia.
      </p>
      <p>
        4.5 Temos o direito de remover qualquer Conteúdo do Usuário que você
        colocar no Site se, em nossa opinião, tal Conteúdo do Usuário não está
        em conformidade com o Aceitável Política de uso.
      </p>
      <p>
        4.6 Não somos responsáveis ​​e não aceitamos qualquer responsabilidade
        por qualquer Conteúdo do Usuário incluindo qualquer conteúdo que
        contenha informações incorretas ou seja difamatório ou perda de Conteúdo
        do Usuário. Não aceitamos nenhuma obrigação de rastrear, editar ou
        monitorar qualquer Conteúdo do Usuário, mas nos reservamos o direito de
        remover, filtrar e / ou editar qualquer Conteúdo do Usuário sem aviso
        prévio e a qualquer momento. Do utilizador O conteúdo não foi verificado
        ou aprovado por nós e as opiniões expressas por outros usuários no Site
        não representam nossas opiniões ou valores.
      </p>
      <p>
        4.7 Se você deseja reclamar sobre o Conteúdo do Usuário carregado por
        outros usuários entre em contato conosco em {appEnv.general.adminEmail}.
      </p>
      <h4> 5. Nosso conteúdo </h4>
      <p>
        5.1 Salvo indicação em contrário, o Site e os Serviços, incluindo a
        fonte código, bancos de dados, funcionalidade, software, designs de
        site, áudio, vídeo, texto, fotografias e gráficos no Site (Nosso
        Conteúdo) são de propriedade ou licenciados para nós e são protegidos
        por leis de direitos autorais e marcas registradas.
      </p>
      <p>
        5.2 Exceto conforme expressamente previsto nestes Termos e Condições,
        nenhuma parte do site, serviços ou nosso conteúdo podem ser copiados,
        reproduzidos, agregado, republicado, enviado, postado, exibido
        publicamente, codificado, traduzido, transmitido, distribuído, vendido,
        licenciado ou de outra forma explorados para qualquer fim comercial, sem
        a nossa expressa permissão prévia por escrito.
      </p>
      <p>
        5.3 Desde que você seja elegível para usar o Site, você recebe um
        licença limitada para acessar e usar o Site e Nosso Conteúdo e para
        baixar ou imprimir uma cópia de qualquer parte do conteúdo para o qual
        você tenha obteve acesso adequado apenas para seu uso pessoal e não
        comercial.
      </p>
      <p>
        5.4 Você não deve (a) tentar obter acesso não autorizado ao Site ou a
        qualquer redes, servidores ou sistemas de computador conectados ao Site;
        e / ou (b) fazer para qualquer finalidade, incluindo correção de erros,
        quaisquer modificações, adaptações, acréscimos ou aprimoramentos ao Site
        ou ao Nosso Conteúdo, incluindo a modificação do papel ou das cópias
        digitais que você possa ter baixado.
      </p>
      <p>
        5.5 Devemos (a) preparar o Site e Nosso Conteúdo com habilidade razoável
        e cuidado; e (b) usar software de detecção de vírus padrão da indústria
        para tentar para bloquear o envio de conteúdo para o Site que contenha
        vírus.
      </p>
      <p>
        5.6 O conteúdo do Site é fornecido apenas para informação geral. isto
        não pretende ser um conselho no qual você deva confiar. Você deve obter
        aconselhamento profissional ou especializado antes de tomar ou abster-se
        de tomar qualquer ação com base no conteúdo do Site.
      </p>
      <p>
        5.7 Embora façamos esforços razoáveis ​​para atualizar as informações em
        nosso site, não fazemos representações, garantias ou garantias, seja
        expressa ou implícita, que Nosso Conteúdo no Site é preciso, completo ou
        atualizado.
      </p>
      <h4> 6. Link para conteúdo de terceiros </h4>
      <p>
        6.1 O Site pode conter links para sites ou aplicativos operados por
        terceiros. Não temos qualquer influência ou controle sobre tais sites ou
        aplicativos de terceiros ou o operador de terceiros. Nós não somos
        responsáveis por e não endossamos quaisquer sites de terceiros ou
        aplicativos ou sua disponibilidade ou conteúdo.
      </p>
      <p>
        6.2 Não aceitamos qualquer responsabilidade por anúncios contidos no
        Site. Se você concordar em comprar bens e / ou serviços de terceiros que
        anuncia no Site, você o faz por sua própria conta e risco. O anunciante
        e não nós, é responsável por tais bens e / ou serviços e se você tiver
        qualquer dúvida ou reclamação em relação a eles, você deve entrar em
        contato com o anunciante.
      </p>
      <h4> 7. Gerenciamento do site </h4>
      <p>7.1 Nós nos reservamos o direito, a nosso exclusivo critério, de:</p>
      <ul>
        <li>
          (1) monitorar o Site em busca de violações destes Termos e Condições;
        </li>
        <li>
          (2) tomar as medidas legais cabíveis contra qualquer pessoa que viole
          leis aplicáveis ​​ou estes Termos e Condições;
        </li>
        <li>
          (3) recusar, restringir o acesso ou disponibilidade de, ou desativar
          (para na medida em que seja tecnologicamente viável) qualquer uma de
          suas Contribuições;
        </li>
        <li>
          (4) remover do site ou desabilitar todos os arquivos e conteúdo que
          são excessivos em tamanho ou de alguma forma um fardo para nossos
          sistemas; e
        </li>
        <li>
          (5) de outra forma, gerenciar o Site de uma maneira projetada para
          proteger nosso direitos e propriedade e para facilitar o bom
          funcionamento do Site e serviços.
        </li>
      </ul>
      <p>
        7.2 Não garantimos que o Site seja seguro ou livre de bugs ou vírus.
      </p>
      <p>
        7.3 Você é responsável por configurar sua tecnologia da informação,
        programas de computador e plataforma para acessar o Site e você deve
        usar seu próprio software de proteção contra vírus.
      </p>
      <h4> 8. Modificações e disponibilidade do Site </h4>
      <p>
        8.1 Nós nos reservamos o direito de alterar, modificar ou remover o
        conteúdo de o Site a qualquer momento ou por qualquer motivo a nosso
        exclusivo critério, sem aviso prévio. Também nos reservamos o direito de
        modificar ou descontinuar todo ou parte dos Serviços sem aviso prévio a
        qualquer momento.
      </p>
      <p>
        8.2 Não podemos garantir que o Site e os Serviços estarão disponíveis de
        todo vezes. Podemos ter problemas de hardware, software ou outros
        problemas ou necessidade para realizar manutenções relacionadas ao Site,
        resultando em interrupções, atrasos ou erros. Você concorda que não
        temos qualquer responsabilidade por qualquer perda, dano ou
        inconveniente causado por sua incapacidade de acessar ou usar o Site ou
        os Serviços durante qualquer tempo de inatividade ou interrupção do Site
        ou serviços. Não somos obrigados a manter e apoiar o Site ou Serviços ou
        para fornecer quaisquer correções, atualizações ou versões.
      </p>
      <p>
        8.3 Pode haver informações no Site que contenham erros, imprecisões ou
        omissões que podem estar relacionados aos Serviços, incluindo
        descrições, preços, disponibilidade e vários outros em formação. Nós nos
        reservamos o direito de corrigir quaisquer erros, imprecisões, ou
        omissões e para alterar ou atualizar as informações a qualquer momento,
        sem aviso prévio.
      </p>
      <h4> 9. Isenção / Limitação de Responsabilidade </h4>
      <p>
        9.1 O Site e os Serviços são fornecidos no estado em que se encontram e
        disponíveis base. Você concorda que seu uso do Site e / ou Serviços será
        em seu único risco, exceto conforme expressamente estabelecido nestes
        Termos e Condições Todas as garantias, termos, condições e compromissos,
        expressos ou implícito (incluindo por estatuto, costume ou uso, um curso
        de negociação, ou lei comum) em relação ao Site e aos Serviços e seu uso
        incluindo, sem limitação, as garantias implícitas de qualidade
        satisfatória, adequação para uma finalidade específica e não violação
        são excluídos em toda a extensão permitida por lei aplicável.
      </p>
      <p>
        Não oferecemos garantias ou representações sobre a precisão ou
        integridade do conteúdo do site e não são responsáveis ​​por quaisquer
        (1) erros ou omissões no conteúdo; (2) qualquer acesso não autorizado ou
        uso de nosso servidores e / ou toda e qualquer informação pessoal e / ou
        financeira informações armazenadas em nosso servidor; (3) qualquer
        interrupção ou cessação de transmissão de ou para o site ou serviços; e
        / ou (4) quaisquer bugs, vírus, cavalos de Troia ou semelhantes que
        podem ser transmitidos para ou através do site por terceiros. Não
        seremos responsáveis ​​por nenhum atraso ou falha no cumprimento de
        nossas obrigações sob estes Termos e Condições se tal atraso ou falha
        for causado por um evento além de nosso controle razoável.
      </p>
      <p>
        9.2 Nossa responsabilidade por perdas ou danos sofridos por você: até $
        100 CAFAJESTE. Quer você seja um consumidor ou um usuário empresarial.
      </p>
      <h4> 10. Vigência e rescisão </h4>
      <p>
        10.1 Estes Termos e Condições permanecerão em pleno vigor e efeito
        enquanto você usa o Site ou Serviços ou é um usuário do Site, conforme
        aplicável. Você pode encerrar seu uso ou participação a qualquer
        momento, por qualquer motivo, seguindo as instruções para encerrar o
        usuário contas em suas configurações de conta, se disponível, ou
        entrando em contato conosco em {""}
        {appEnv.general.adminEmail}
      </p>
      <p>
        10.2 Sem limitar qualquer outra disposição destes Termos e Condições,
        nos reservamos o direito de, a nosso exclusivo critério e sem aviso
        prévio ou responsabilidade, negar acesso e uso do Site e dos Serviços
        (incluindo o bloqueio de certos endereços IP), para qualquer pessoa por
        qualquer motivo incluindo, sem limitação, a violação de qualquer
        representação, garantia ou convênio contido nestes Termos e Condições ou
        de qualquer lei ou regulamento.
      </p>
      <p>
        Se determinarmos, a nosso exclusivo critério, que seu uso do O Site /
        Serviços viola estes Termos e Condições ou de qualquer lei ou
        regulamento aplicável, podemos encerrar seu uso ou participação no Site
        e nos Serviços ou exclua seu perfil e qualquer conteúdo ou informações
        que você postou a qualquer momento, sem aviso, em nosso único critério.
      </p>
      <p>
        10.3 Se encerrarmos ou suspendermos sua conta por qualquer motivo
        estabelecido em esta Seção 9, você está proibido de registrar e criar um
        novo conta em seu nome, um nome falso ou emprestado, ou o nome de
        qualquer terceiro, mesmo se você estiver agindo em nome do terceiro.
        Dentro além de encerrar ou suspender sua conta, nos reservamos o direito
        para tomar as medidas legais adequadas, incluindo, sem limitação,
        perseguir ações civis, criminais e injuntivas.
      </p>
      <h4> 11. Aplicativo móvel </h4>
      <p>
        11.1 Se você acessar os Serviços por meio de um aplicativo móvel, nós
        concedemos você um direito revogável, não exclusivo, não transferível e
        limitado a instalar e usar o aplicativo móvel em dispositivos
        eletrônicos sem fio pertencente ou controlado por você e para acessar e
        usar o aplicativo móvel em tais dispositivos estritamente de acordo com
        os termos e condições de esta licença.
      </p>
      <p>
        11.2 Os termos a seguir se aplicam quando você usa um aplicativo móvel
        obtido na Apple Store ou no Google Play (cada um um aplicativo
        Distribuidor) para acessar os Serviços:
      </p>
      <ul>
        <li>
          (a) A licença concedida a você para nosso aplicativo móvel é limitada
          para uma licença intransferível para usar o aplicativo em um
          dispositivo que utiliza o sistema operacional Apple iOS ou Android,
          conforme aplicável, e de acordo com as regras de uso estabelecidas no
          aplicativo aplicável Termos de serviço do distribuidor;
        </li>
        <li>
          (b) Somos responsáveis ​​por fornecer qualquer manutenção e suporte
          serviços em relação ao aplicativo móvel, conforme especificado nestes
          Termos e Condições ou conforme exigido pela legislação aplicável. Você
          reconhece que cada Distribuidor de Aplicativos não tem nenhuma
          obrigação para fornecer quaisquer serviços de manutenção e suporte com
          relação ao aplicativo móvel;
        </li>
        <li>
          (c) No caso de qualquer falha do aplicativo móvel em conformidade a
          qualquer garantia aplicável, você pode notificar um Distribuidor de
          App, e o O Distribuidor de aplicativos, de acordo com seus termos e
          políticas, pode reembolsar o preço de compra, se houver, pago pelo
          aplicativo móvel, e para na extensão máxima permitida pela lei
          aplicável, um Distribuidor de Aplicativos não terá nenhuma outra
          obrigação de garantia em relação ao aplicativo móvel;
        </li>
        <li>
          (d) Você declara e garante que (i) você não está localizado em um país
          que está sujeito a embargo do governo dos Estados Unidos, ou que foi
          designado pelo governo dos EUA como um país de "apoio ao terrorismo";
          e (ii) você não está listado em nenhuma lista do governo dos EUA de ou
          partes restritas;
        </li>
        <li>
          (e) Você deve cumprir os termos de contrato de terceiros aplicáveis ao
          usar o aplicativo móvel, por exemplo, se você tiver um VoIP
          aplicativo, então você não deve violar seus dados sem fio contrato de
          serviço ao usar o aplicativo móvel; e
        </li>
        <li>
          (f) Você reconhece e concorda que os Distribuidores de Aplicativos são
          terceiros beneficiários destes Termos e Condições, e que cada App O
          Distribuidor terá o direito (e será considerado que aceitou o direito)
          de fazer cumprir estes Termos e Condições contra você como um terceiro
          beneficiário.
        </li>
      </ul>
      <h4> 12. Geral </h4>
      <p>
        12.1 Visitando o Site, enviando-nos e-mails e preenchendo formulários
        online constituem comunicações eletrônicas. Você consente em receber
        comunicações e você concorda que todos os acordos, avisos, divulgações,
        e outras comunicações que fornecemos a você eletronicamente, por e-mail
        e no Site, atender a qualquer requisito legal de que tal comunicação
        seja feita em escrita.
      </p>
      <p>
        Você concorda com o uso de assinaturas eletrônicas, contratos, pedidos e
        outros registros e entrega eletrônica de avisos, políticas e registros
        de transações iniciadas ou concluídas por nós ou através do Site. Você,
        por meio deste, renuncia a quaisquer direitos ou requisitos sob
        quaisquer estatutos, regulamentos, regras, decretos ou outras leis em
        qualquer jurisdição que exigem uma assinatura original ou entrega ou
        retenção de documentos não eletrônicos registros, ou para pagamentos ou
        concessão de créditos por outros que não meios eletrônicos.
      </p>
      <p>
        12.2 Estes Termos e Condições e quaisquer políticas ou regras
        operacionais postados por nós no Site ou em relação aos Serviços
        constituem o acordo e entendimento completo entre você e nós.
      </p>
      <p>
        12.3 Nossa falha em exercer ou fazer cumprir qualquer direito ou
        disposição destes Os Termos e Condições não devem funcionar como uma
        renúncia de tal direito ou provisão.
      </p>
      <p>
        12.4 Podemos atribuir qualquer ou todos os nossos direitos e obrigações
        a terceiros em a qualquer momento.
      </p>
      <p>
        12.5 Não seremos responsáveis ​​por qualquer perda, dano, atraso ou
        omissão de ação causada por qualquer causa além do nosso controle
        razoável.
      </p>
      <p>
        12.6 Se houver qualquer disposição ou parte de uma disposição destes
        Termos e As condições são ilegais, nulas ou inexequíveis, essa
        disposição ou parte de a disposição é considerada separável destes
        Termos e Condições e não afeta a validade e exequibilidade de qualquer
        disposições.
      </p>
      <p>
        12.7 Não há joint venture, parceria, emprego ou agência relacionamento
        criado entre você e nós como resultado destes Termos e Condições ou uso
        do Site ou Serviços.
      </p>
      <p>
        12.8 As seguintes são marcas registradas de {appEnv.general.company}. Tu
        es não é permitido usá-los sem nossa aprovação, a menos que façam parte
        de material nosso site afirma explicitamente que você tem permissão para
        usar.
      </p>
      <p>
        12.9 Uma pessoa que não seja parte destes Termos e Condições deverá não
        têm direito ao abrigo da Lei de Contratos (Direitos de Terceiros) de
        1999 a fazer cumprir qualquer termo destes Termos e Condições.
      </p>
      <p>
        12.10 A fim de resolver uma reclamação sobre os Serviços ou para receber
        mais informações sobre o uso dos Serviços, por favor entre em contato
        conosco por e-mail em {appEnv.general.adminEmail} ou por correio para:{" "}
        {""}
        {appEnv.general.address}, {appEnv.general.company}, {""}
        {appEnv.general.country} - {appEnv.general.zipCode}
      </p>
    </InternalPage>
  );
}
