import { Injectable, NotFoundException } from '@nestjs/common';
import { notFound } from '@shared/utils/errors';
import { RoleRepository } from '@shared/repositories/role.repository';

@Injectable()
export class DeleteRoleService {
  constructor(private repository: RoleRepository) {}

  async execute(id: string) {
    return this.repository.deleteRole(id);
  }
}
