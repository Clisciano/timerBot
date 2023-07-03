<?php
        // Exemplo de chamada
        echo gerarSenha('429829');

        // função para gerar a senha [$codigoSistema deve ser solicitado ao CNJ]

        function gerarSenha($codigoSistema){

                $tz = new DateTimeZone('America/Sao_Paulo');
                $retorno = '';
        $sdf = date_format(new DateTime("now", $tz),'Ymd');
        $password = $codigoSistema . $sdf;

        $hash = md5($password, true);

        for($i=0; $i<strlen($hash); $i++) {
                    $tokenDiario .= sprintf('%02x',ord($hash[$i]));
            }

        return $tokenDiario;
    }
?>
