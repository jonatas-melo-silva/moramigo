import React, { memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

import { useLocalities } from '../../../contexts/LocalitiesContext';

import { Head } from '../../elements';
import { Header } from '../../Header';

import api from '../../../services/api';
import { schema } from './validacao';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.css';

const title = 'Cadastrar - Perfil';

const SignUp: React.FC = () => {
  const { localities, fetchLocalities } = useLocalities();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [expanded, setExpanded] = useState(true);
  const [selections] = useState([]);
  const router = useRouter();
  const toggleExpanded = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(true);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      await fetchLocalities();
    };
    initializeData();
  }, []);

  const onSubmit = async data => {
    toast.loading('Cadastrando...');
    try {
      const bairros = data.localidades;
      const localidades = bairros.map(Number);
      const perfil = {
        user: {
          username: data.username,
          password: data.password
        },
        restricoes: {
          valor_contribuicao: data.valor_contribuicao,
          genero_colega: data.genero_colega,
          animais: data.animais,
          visitas: data.visitas,
          bebidas: data.bebidas,
          fumantes: data.fumantes,
          festas: data.festas,
          localidades: localidades
        },
        nome: data.nome,
        descricao: data.descricao,
        data_nascimento: data.data_nascimento,
        email: data.email,
        ocupacao: data.ocupacao,
        genero: data.genero
      };
      let form_data = new FormData();

      if (data.file[0] !== undefined) {
        form_data.append('imagem', data.file[0]);
      }

      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      await api
        .post('perfil/', perfil)
        .then(async response => {
          let id_pessoa = response.data.id;
          form_data.append('pessoa', id_pessoa);
          await api.post('foto/', form_data, config);

          toast.dismiss();

          if (response.status === 201) {
            toast.success('Cadastrado com sucesso!');
          }

          setTimeout(() => {
            return router.push('/login');
          }, 3000);
        })
        .catch(function (err) {
          toast.dismiss();
          const data = err.response.data;

          Object.entries(data).forEach(([key, value]) => {
            if (typeof value !== 'string') {
              Object.entries(value).forEach(([key, value]) => {
                toast.error(`${value}`);
              });
            }
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head title={title} />
      <Header />
      <ToastContainer autoClose={3000} className={styles.toastContainer} />

      <div className={styles.container}>
        <main>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.containerMain}
          >
            <div className={styles.card}>
              <div className={styles.imgForm}>
                <img src="/img/avatar.png" alt="imgBannerForm" />

                {/* Campo de Imagem so habilitar quando decidir como vai fazer o upload  */}
                {/* <label htmlFor="avatar">Adicionar foto</label> */}
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  {...register('file')}
                />
              </div>
            </div>

            <div className={styles.formProfile}>
              <fieldset>
                <legend>Dados do perfil</legend>
                <div className={styles.separator} id={styles.light}></div>

                <div className={styles.inputWrapper}>
                  <label className={styles.required} htmlFor="username">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    {...register('username')}
                    placeholder="Digite seu usuario"
                  />
                  <span>{errors.username?.message}</span>
                </div>
                <div className={styles.inputWrapper}>
                  <label className={styles.required} htmlFor="password">
                    Senha
                  </label>
                  <input
                    name="password"
                    type="password"
                    {...register('password')}
                    placeholder="Informe sua senha"
                  />
                  <span>{errors.password?.message}</span>
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="descricao">Descrição</label>

                  <textarea
                    name="descricao"
                    {...register('descricao')}
                    placeholder="Informe uma descrição sobre seu perfil"
                  />
                  <span>{errors.descricao?.message}</span>
                </div>
              </fieldset>

              <fieldset>
                <legend>Dados Pessoais</legend>
                <div className={styles.separator} id={styles.light} />
                <div className={styles.dividirForm}>
                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="name">
                      Nome
                    </label>
                    <input
                      name="nome"
                      type="text"
                      {...register('nome')}
                      placeholder="Digite seu nome"
                    />
                    <span>{errors.nome?.message}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="email">
                      E-mail
                    </label>
                    <input
                      name="email"
                      type="email"
                      {...register('email')}
                      placeholder="Digite seu e-mail"
                    />
                    <span>{errors.email?.message}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label
                      className={styles.required}
                      htmlFor="data_nascimento"
                    >
                      Data de nascimento
                    </label>
                    <input
                      type="date"
                      name="data_nascimento"
                      placeholder="Insira sua idade"
                      {...register('data_nascimento')}
                    />
                    <span>{errors.data_nascimento?.message}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="ocupacao">
                      Ocupação / Serviço
                    </label>
                    <input
                      type="name"
                      name="ocupacao"
                      placeholder="Digite sua ocupação"
                      {...register('ocupacao')}
                    />
                    <span>{errors.ocupacao?.message}</span>
                  </div>

                  <div className={styles.inputRadio}>
                    <div className={styles.inputWrapper}>
                      <label className={styles.required} htmlFor="genero">
                        Sexo
                      </label>
                      <select name="genero" {...register('genero')}>
                        <option value="">Selecione</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="O">Outros</option>
                      </select>
                      <span>{errors.genero?.message}</span>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>Interesse</legend>
                <div className={styles.separator} id={styles.light} />

                <div className={styles.dividirForm}>
                  <div onClick={toggleExpanded}>
                    {selections.length ? (
                      selections.map((name, i) => (
                        <span key={i}>
                          {i ? ', ' : null}
                          {name}
                        </span>
                      ))
                    ) : (
                      <label htmlFor="Bairros" className={styles.required}>
                        Selecione bairros
                      </label>
                    )}

                    {expanded && (
                      <>
                        <span className={styles.block}>
                          {localities.map((locality, index) => (
                            <label key={locality.id}>
                              <input
                                type="checkbox"
                                name={locality}
                                value={locality.id}
                                {...register('localidades')}
                              />
                              {locality.name}
                            </label>
                          ))}
                        </span>
                        <span className={styles.campo}>
                          {errors.localidades?.message}
                        </span>
                      </>
                    )}
                  </div>

                  <div className={styles.inputWrapper}>
                    <label
                      className={styles.required}
                      htmlFor="valor contribuicao"
                    >
                      Valor que deseja Contribuir
                    </label>
                    <input
                      name="valor_contribuicao"
                      type="name"
                      placeholder="Digite o valor"
                      {...register('valor_contribuicao')}
                    />
                    <span>{errors.valor_contribuicao?.message}</span>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>Restrições</legend>
                <div className={styles.separator} id={styles.light}>
                  {' '}
                </div>

                <div className={styles.dividirForm}>
                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="animais">
                      Animais
                    </label>
                    <select
                      name="animais"
                      placeholder=""
                      {...register('animais')}
                    >
                      <option value="">Selecione</option>
                      <option value="S">Com animais</option>
                      <option value="N">Sem animais</option>
                      <option value="T">Tanto faz</option>
                    </select>
                    <span>{errors.animais?.message}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="bebidas">
                      Bebidas Alcoólicas
                    </label>
                    <select
                      name="bebidas"
                      placeholder=""
                      {...register('bebidas')}
                    >
                      <option value="">Selecione</option>
                      <option value="S">Podem beber</option>
                      <option value="N">Sem bebidas</option>
                      <option value="T">Tanto faz</option>
                    </select>
                    <span>{errors.bebidas?.message}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="fumantes">
                      Fumantes
                    </label>
                    <select
                      name="fumantes"
                      placeholder=""
                      {...register('fumantes')}
                    >
                      <option value="">Selecione</option>
                      <option value="S">Podem fumar</option>
                      <option value="N">Sem Fumantes</option>
                      <option value="T">Tanto faz</option>
                    </select>
                    <span>{errors.fumantes?.message}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="visitas">
                      Visitas
                    </label>
                    <select
                      name="visitas"
                      placeholder=""
                      {...register('visitas')}
                    >
                      <option value="">Selecione</option>
                      <option value="S">Podem receber visitas</option>
                      <option value="N">Sem receber visitas</option>
                      <option value="T">Tanto faz</option>
                    </select>
                    <span>{errors.visitas?.message}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="festas">
                      Festas
                    </label>
                    <select
                      name="festas"
                      placeholder=""
                      {...register('festas')}
                    >
                      <option value="">Selecione</option>
                      <option value="S">Podem ter festa</option>
                      <option value="N">Sem festas</option>
                      <option value="T">Tanto faz</option>
                    </select>
                    <span>{errors.festas?.message}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label className={styles.required} htmlFor="genero colegas">
                      Genero de colega
                    </label>
                    <select
                      name="genero_colega"
                      placeholder="Digite seu gênero companheiro"
                      {...register('genero_colega')}
                    >
                      <option value="">Selecione</option>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                      <option value="O">Outro</option>
                      <option value="T">Tanto faz</option>
                    </select>
                    <span>{errors.genero_colega?.message}</span>
                  </div>
                </div>
              </fieldset>

              <div className={styles.btnCadastre}>
                <button type="submit">
                  <a data-cy="entrar-btn">Cadastrar</a>
                </button>
              </div>
            </div>
          </form>

          <br></br>
        </main>
      </div>
    </>
  );
};

export default memo(SignUp);
