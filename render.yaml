services:
  - name: Axiom
    type: web
    buildCommand: yarn build
    publishCommand: cp -r ./* /mnt/render/www
    skipInstall: true
    envVars:
      SKIP_INSTALL_DEPS: "true"
